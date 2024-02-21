import React, { useState } from 'react';
import axios from 'axios';
import './registration.css';


const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registrationStatus, setRegistrationStatus] = useState(null);

    const handleRegistration = async () => {
        try {
            console.log({ username, email, password });
            const response = await axios.post(
                'http://127.0.0.1:8000/api/auth/register/',
                {
                    username,
                    email,
                    password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log(response.data);
            // Handle successful registration
            setRegistrationStatus('success');
        } catch (error) {
            console.error(error);
            // Handle registration error
            setRegistrationStatus('error');
        }
    };

    return (
        <div>
            {registrationStatus === 'success' ? (
                <div>
                    <p>Registration successful!</p>
                    {/* Add additional UI elements or redirect to another page */}
                </div>
            ) : (
                <>
                    <div class="registration_section">
                        <div class="background_img_reg">
                            <div class="gradient_background"><h1 class="reg_housemates_h1">Housemates</h1></div>
                        </div>
                        <div class="sign_up_form">
                            <h2>Sign Up</h2>
                            <div class="inputs_reg">
                                <span class="label">Username</span>
                                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required/>
                                <span class="label">Email</span>
                                <input type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} required/>
                                <span class="label">Password</span>
                                <input type="password" placeholder="****************" onChange={(e) => setPassword(e.target.value)} required/>
                                <span class="label">Repeat Password</span>
                                <input type="password" placeholder="****************" required/>
                            </div>

                            <button class="sign_up_btn" onClick={handleRegistration}>Sign Up</button>
                            <a class="link_sign_in" href="#">Sign In </a>
                            {registrationStatus === 'error' && <p>Registration failed. Please try again.</p>}
                        </div>
                    </div>

                </>
            )}
        </div>
    );
};

export default RegistrationForm;
