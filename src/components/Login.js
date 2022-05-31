import React from 'react';
import { Navbar } from './Navbar';
import './Buttons.css';

export const Login = () =>{
    return (
         <>

         <div className="image"></div>
            <Navbar></Navbar>
                
                <div className="base-container">
                    <div className="header">LOG IN</div>
                    <div className="content"></div>
                    <div className="form1">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password"/>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="button">
                            <button className='login-btn'>
                                Log in
                            </button>
                        </div>
                    </div>

                    </div>

            
        </>
     )
}