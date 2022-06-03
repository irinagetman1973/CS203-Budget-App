import React, { useState } from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faCamera } from '@fortawesome/free-solid-svg-icons'


import '../App.css';
import './DashboardPageLayout.css'

import Expenses from '../pages/Expenses';
import Income from '../pages/Income';
import EditProfile from "./EditProfile";


// library.add(faCamera)

// const camera = icon({ prefix: 'fas', iconName: 'camera' })

export const DashboardPageLayout = () => {
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
                            <h2>
                                Hi,Vanda
                            </h2>
                            <p>
                                Here is your own space
                            </p>

                            {/*Brittany */}
                            <button className="editProfile-btn" onClick={handleClick}>
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
                                <button className='sign-btn col-sm' onClick={navigateToExpenses}>
                                    Expenses
                                </button>
                                <Routes>
                                    <Route path="/Expenses" element={<Expenses />} />
                                </Routes>
                                <button className='sign-btn col-sm' onClick={navigateToIncome}>
                                    Income
                                </button>
                                <Routes>
                                    <Route path="/Income" element={<Income />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Brittany */}
            </div>

        </>
    )
}

export default DashboardPageLayout

