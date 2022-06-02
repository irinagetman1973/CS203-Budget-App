import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import Dashboard from '../pages/Dashboard';
import './Buttons.css';


export const DashTemp = () => {
    const navigate = useNavigate();

    const navigateToExpenses = () => {
        navigate('/Expenses');
    };

    return (
        <>
            <Navbar></Navbar>
            <div className="footer">
                <div className="button">
                    <button className='login-btn' onClick={navigateToExpenses}>
                        Log in
                    </button>
                    <Routes>
                        <Route path="/Dashboard" element={<Dashboard />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}


{/*Brittany*/ }