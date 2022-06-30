import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from '../pages/Dashboard';
import httpClient from './httpClient';


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const LogInUser = async () => {
      console.log(email, password);
  
      try {
        const resp = await httpClient.post("//localhost:5000/login", {
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
            {/* Background Image */}
            <div className="image"></div>
            <div className="base-container">
                {/*Title*/}
                <div className="header1">LOG IN:</div>
                {/*Log in form start*/}
                <div className="form1">
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input 
                        type="text" 
                        name="email" 
                        placeholder="email" 
                        value={email} onChange={(e) => setEmail(e.target.value)} 
                        required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input 
                        type="password" 
                        name="password" 
                        placeholder="password" 
                        value={password} onChange={(e) => setPassword(e.target.value)} 
                        required />
                    </div>
                </div>
                <div className="footer">
                    <div className="button">
                    <button className='btn-warning btn-lg' onClick={() => LogInUser()}>
                            <button className='btn-warning btn-lg' onClick={navigateToDashboard} >
                                Log In
                            </button>
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