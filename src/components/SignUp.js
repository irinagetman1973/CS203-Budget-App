import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from '../pages/Dashboard';
import './Buttons.css';

export const SignUp = () => {
    const navigate = useNavigate();

    const navigateToDashboard = () => {
        navigate('/Dashboard');
    };

    return (
        <>
            <div className="image"></div>
            <div className="base-container">
                <div className="header2">CREATE NEW ACCOUNT:</div>
                <div className="form2">
                    <div className="form-group">
                        <label htmlFor="firstname">First Name:</label>
                        <input type="firstname" name="firstname" placeholder="first name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name:</label>
                        <input type="lastname" name="lastname" placeholder="last name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" name="email" placeholder="e-mail" />
                    </div>
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
                        <button className='sign-btn' onClick={navigateToDashboard}>
                            Sign Up
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

{/*Brittany*/ }