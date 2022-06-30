import React, { useState } from 'react';
import { Route, Routes, useNavigate, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import httpClient from './httpClient';

export const SignUp = () => {
    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const User_SignUp = async () => {
        console.log(fname, email, password);

        try {
            const resp = await httpClient.post("//localhost:3000/signup", {
                fname, 
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
                            value={fname} onChange={(e) => setFname(e.target.value)}
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name:</label>
                        <input
                            type="text"
                            name="lastname"
                            placeholder="Last Name"
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
                    {/* <div className="button">
                        <button className='btn-warning btn-lg' onClick={() => User_SignUp()}>
                            <button className='btn-warning btn-lg' onClick={navigateToDashboard} >
                                Sign Up
                            </button>
                        </button>
                        <Routes>
                            <Route path="/Dashboard" element={<Dashboard />} />
                        </Routes>
                    </div> */}
                    <Link to={'/Dashboard'}>
                        <button className='btn-warning btn-lg' onClick={() => User_SignUp()}>
                            Sign Up
                        </button>
                    </Link>
                </div>
                <div className="footer">

                </div>
            </div>
        </>
    )
}

export default SignUp

{/*Brittany*/ }