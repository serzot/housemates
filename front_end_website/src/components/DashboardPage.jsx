import React, { useEffect, useState } from 'react';
import { getUserDetails, logout, isLoggedIn } from '../utils/auth';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import './styles/dashboard.css';

const DashboardPage = () => {
    const [userDetails, setUserDetails] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUserDetails = localStorage.getItem('userDetails');
        if(storedUserDetails){
            setUserDetails(JSON.parse(storedUserDetails));
        }else{
            const fetchUserDetails = async () => {
                try {
                    const details = await getUserDetails();
                    setUserDetails(details);
                } catch (error) {
                    console.error(error);
                }
            };

            fetchUserDetails();
        }
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div>
            {isLoggedIn() ? (
                <div>
                    {userDetails && (
                        <div>
                            <div class="header_dashboard">
                                <h1>Dashboard</h1>
                                <button class="logout" onClick={handleLogout}>Logout</button>
                            </div>
                            <section id="user_info_section">
                                <div class="profile_picture"></div>
                                <div class="user_info">
                                    <li>ID: {userDetails.id}</li>
                                    <li>Username: {userDetails.username}</li>
                                    <li>Email: {userDetails.email}</li>
                                    <li>Name: {userDetails.first_name} {userDetails.last_name}</li>
                                </div>
                            </section>
                            <section id="create_household">
                                <Link to="/create_household" class="create_household_link">Create Household</Link>
                            </section>
                            
                        </div>
                    )}
                </div>
            ) : (
                <div>
                    <h2 class="login_first">Login first</h2>
                    <Link to="/login" class="link_to_login">Login</Link>
                </div>
            )}
        </div>
    );
};

export default DashboardPage;