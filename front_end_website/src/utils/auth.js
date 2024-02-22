import axios from 'axios';

const API_URL = 'http://localhost:8000/api/auth/';

export const login = async (usernameOrEmail, password) => {
    try {
        const response = await axios.post(`${API_URL}token/`, {
            username_or_email: usernameOrEmail,
            password,
        });

        localStorage.setItem('token', response.data.access);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const logout = () => {
    localStorage.removeItem('token');
};

export const isLoggedIn = () => {
    return !!localStorage.getItem('token');
};

export const getUserDetails = async () => {
    try {
        const response = await axios.get(`${API_URL}user-details/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};