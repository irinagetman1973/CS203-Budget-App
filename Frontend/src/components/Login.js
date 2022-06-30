import React, {useState} from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Dashboard from '../pages/Dashboard';
import httpClient from './httpClient';


export const Login: React.FC = () => {

    const [email, setEmail] = useState < string > ("");
    const [password, setPassword] = useState < string > ("");

    const logInUser = async () => {
        console.log(email, password);

        try {
            const resp = await httpClient.post("//localhost:5000/login", {
                email,
                password,
            });

            window.location.href = "/";
        } catch (error: any) {
            if (error.response.status === 401) {
                alert("Invalid credentials");
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
                        <label htmlFor="username">Username:</label>
                        <input type="text" name="username" placeholder="username" value={email} onChange={(e) => setEmail(e.target.value)} id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" placeholder="password" value={passowrd} onChange={(e) => setPassword(e.target.value)} id="" />
                    </div>
                </div>
                <div className="footer">
                    <div className="button">
                        <button className='btn-warning btn-lg' onClick={() => logInUser()} /*onClick={navigateToDashboard}*/ >
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