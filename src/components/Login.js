import React from "react";

 export const Login = () =>{
     return (
         <>
         <nav className="navbar">
             <div className='navbar-container'>
                 <span className='Budget-logo'>Budget</span>
                 <span className='App-logo'>App</span>
             </div>
         </nav>
         

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

/*export class Login extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div className="base-container">
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
    }
}*/