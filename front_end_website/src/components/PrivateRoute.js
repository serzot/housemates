import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isLoggedIn } from '../utils/auth';

const PrivateRoute = ({ element: Element, ...rest }) => (
    <Route
        {...rest}
        element={isLoggedIn() ? <Element /> : <Navigate to="/login" />}
    />
);

export default PrivateRoute;