import React, { useEffect, useState } from 'react';
import { getUserDetails } from '../utils/auth';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { logout } from '../utils/auth';

const DashboardPage = () => {
    const [userDetails, setUserDetails] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const details = await getUserDetails();
                setUserDetails(details);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUserDetails();
    }, []);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div>
            <h1>DashboardPage</h1>
            <div>
                {userDetails && (
                    <div>
                        <p>ID: {userDetails.id}</p>
                        <p>Username: {userDetails.username}</p>
                        <p>Email: {userDetails.email}</p>
                    </div>
                )}
            </div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default DashboardPage;