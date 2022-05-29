import { render } from "@testing-library/react";
import React from "react";
import { Navbar } from "./Navbar";

export const Login = () =>{
     return (
         <>
         <Navbar></Navbar>
      
        <div className="base-container">
            <div className="header">Login</div>
            <div className="content"></div>
            <div className="form">
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
                <button type="button" className="btn">
                    Login
                </button>
            </div>
        </div>
        </>
     )
}