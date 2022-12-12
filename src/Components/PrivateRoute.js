import React from 'react';
import { Navigate } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

//create wrapper for current route
function PrivateRoute({ children }) {

    const { currentUser } = useAuth()

    return currentUser ? children : <Navigate to="/login" />;
}

export default PrivateRoute;