import React, { useState } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import { HiPlus, HiMinus } from 'react-icons/hi'

import '../App.css';
import './DashboardPageLayout.css'

import Expenses from '../pages/Expenses';
import Income from '../pages/Income';
import EditProfile from "./EditProfile";
import Sign_Up from "../pages/SignUp";
import httpClient from "./httpClient";
import { Users } from '../types';

//User Account
export const DashboardPageLayout = () => {

    //Creating navigation to Expense and Income pages
    const navigate = useNavigate();

    const navigateToExpenses = () => {
        navigate('/Expenses');
    }
    const navigateToIncome = () => {
        navigate('/Income');
    }

    const [isShown, setIsShown] = useState(false)

    const handleClick = event => {
        setIsShown(true)
    }

    return (
        <>
            <div className="db-layout">
                <div className="banner--db">
                    <div className="banner-content">
                        <div className="db-box">
                            <div className="db-avatar">
                            </div>
                        </div>
                        <div className="greeting">
                            <h1>
                                {/*Is meant to display user input name */}
                                Hi {Sign_Up.fname}
                            </h1>
                            <p>Here is your own space</p>
                            <button className="btn-warning btn-lg" onClick={handleClick}>
                                Edit profile
                            </button>
                            {isShown && (
                                <div>
                                    <EditProfile />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="budget-section">
                    <div className="budget-section-wrap">
                        <h2 className='mt-3'>Choose your tool</h2>
                        <div className='row mt-3'>
                            <div className='col=sm'>
                                <button className=' btn-warning btn-lg col-sm' onClick={navigateToExpenses}>
                                    Expenses <HiMinus />
                                </button>
                                <Routes>
                                    <Route path="/Expenses" element={<Expenses />} />
                                </Routes>
                                <button className=' btn-warning btn-lg col-sm' onClick={navigateToIncome}>
                                    Income <HiPlus />
                                </button>
                                <Routes>
                                    <Route path="/Income" element={<Income />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default DashboardPageLayout

//Irina

{/*Brittany*/ }