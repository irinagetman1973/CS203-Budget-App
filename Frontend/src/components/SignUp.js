import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from '../pages/Dashboard';
import httpClient from './httpClient';

export const SignUp = () => {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const User_SignUp = async () => {
        console.log(email, password);

        try {
            const resp = await httpClient.post("//localhost:5000/signup", {
                email,
                password,
            });
            window.location.href = "/";
        } catch (error) {
            if (error.response.status === 401) {
                alert("Invalid Credentials");
            }
        }
    };

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
                        <input 
                        type="text" 
                        name="firstname" 
                        placeholder="First Name" 
                        value={fname} onChange={(e) => setfname(e.target.value)} 
                        required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name:</label>
                        <input 
                        type="text" 
                        name="lastname" 
                        placeholder="Last Name" 
                        value={lname} onChange={(e) => setlname(e.target.value)} 
                        required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail:</label>
                        <input 
                        type="text" 
                        name="email" 
                        placeholder="E-mail" 
                        value={email} onChange={(e) => setEmail(e.target.value)} 
                        required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={password} onChange={(e) => setPassword(e.target.value)} 
                        required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Confirm Password:</label>
                        <input 
                        type="password" 
                        name="password" 
                        placeholder="Password"  
                        required />
                    </div>
                    <div className="button">
                        <button className='btn-warning btn-lg' onClick={() => User_SignUp() & navigateToDashboard} >
                            Sign Up
                        </button>
                         <Routes>
                            <Route path="/Dashboard" element={<Dashboard />} />
                        </Routes> 
                    </div>
                </div>
                <div className="footer">

                </div>
            </div>
        </>
    )
}

export default SignUp

{/*Brittany*/ }