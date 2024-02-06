import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegistration = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/register/', {
                username,
                email,
                password,
            });
            console.log(response.data);  // Handle successful registration
        } catch (error) {
            console.error(error);  // Handle registration error
        }
    };

    return (
        <div>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegistration}>Register</button>
        </div>
    );
};

export default RegistrationForm;