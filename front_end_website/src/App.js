import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage'


function App() {
    return (

            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/registration" element={<RegistrationForm />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </Router>

    );
}

export default App;
