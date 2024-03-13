import axios from 'axios';

const API_URL = 'http://localhost:8000/api/auth/';

export const login = async (usernameOrEmail, password) => {
    try {
        const response = await axios.post(`${API_URL}token/`, {
            username: usernameOrEmail,
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
    localStorage.removeItem('userDetails');
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

        localStorage.setItem('userDetails', JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        throw error;
    }
};