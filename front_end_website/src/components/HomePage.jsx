import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>HomePage</h1>
            <nav>
                <ul>
                    <li><Link to="/registration">Registration</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default HomePage;