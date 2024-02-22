import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import DashboardPage from './components/DashboardPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/registration" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;