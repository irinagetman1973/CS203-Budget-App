import React from "react";
import { Navbar } from "./Navbar";
import './Buttons.css';

export const SignUp = () =>{
    return (
        <>
         <Navbar></Navbar>
         
        <div className="base-container">
            <div className="header">CREATE NEW ACCOUNT:</div>
            <div className="content"></div>
            <div className="form2">
                <div className="form-group">
                    <label htmlFor="firstname">First Name:</label>
                    <input type="firstname" name="firstname" placeholder="first name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Last Name:</label>
                    <input type="lastname" name="lastname" placeholder="last name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" name="email" placeholder="e-mail"/>
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" placeholder="username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" placeholder="password"/>
                </div>
            </div>
            <div className="footer">
            <button className='sign-btn'>
                 Sign Up
            </button>
            </div>
        </div>
        </>
    )
}

/*export class SignUp extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className="base-container">
            <div className="header">Sign Up</div>
            <div className="content"></div>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" placeholder="username"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" placeholder="email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="password"/>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">
                    Sign Up
                </button>
            </div>
        </div>
    }
}*/