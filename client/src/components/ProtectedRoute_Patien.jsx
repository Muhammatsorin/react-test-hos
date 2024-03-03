import React from 'react'
import { Navigate } from "react-router-dom";
import Patient from './Patient';

function ProtectedRoute({ children }) {
    
    const isLoggedIn = localStorage.getItem("@user");

    return (
        <>
            {!isLoggedIn && (
                <Navigate to="/login" replace={true} />
            )}
            <Patient />
        </>
    )
}

export default ProtectedRoute