import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { login, isLoggedIn } from '../utils/auth';
import './styles/login.css';

const LoginPage = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await login(usernameOrEmail, password);
            setLoginStatus('success');
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
            setUsernameOrEmail('');
            setPassword('');
            setLoginStatus('error');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleLogin();
        }
    };

    return (
        <div class="login_section">
            <div class="background_img_login">
                <div class="gradient_background"><h1 class="login_housemates_h1">Housemates</h1></div>
            </div>
            <div class="sign_in_form">
                <h2>Sign In</h2>
                <div class="inputs_login">
                    <span class="label">Username or Email</span>
                    <input 
                        type="text" 
                        placeholder="Username or Email" 
                        value={usernameOrEmail} 
                        onChange={(e) => setUsernameOrEmail(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <span class="label">Password</span>
                    <input
                        type="password"
                        placeholder="****************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                </div>

                <button class="sign_in_btn" onClick={handleLogin}>Sign In</button>
                <Link class="link_sign_in" to="/registration">Sign Up</Link>


                {loginStatus === 'error' && <p class="login_failed">Login failed. Please try again.</p>}
            </div>
        </div>
    );
};

export default LoginPage;