import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from '../pages/Dashboard';


export const Login = () => {
    const navigate = useNavigate();

    const navigateToDashboard = () => {
        navigate('/Dashboard');
    };

    return (
        <>
            {/* Background Image */}
            <div className="image"></div>
            <div className="base-container">
                {/*Title*/}
                <div className="header1">LOG IN:</div>
                {/*Log in form start*/}
                <div className="form1">
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" placeholder="password" />
                    </div>
                </div>
                <div className="footer">
                    <div className="button">
                        <button className='btn-warning btn-lg' onClick={navigateToDashboard}>
                            Log in
                        </button>
                        <Routes>
                            <Route path="/Dashboard" element={<Dashboard />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login

{/*Brittany*/ }