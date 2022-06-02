import React from "react";
import './DashboardPageLayout.css'
import '../App.css';
import Expenses from '../pages/Expenses';
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { Route, Routes, useNavigate } from 'react-router-dom';

// library.add(faCamera)

// const camera = icon({ prefix: 'fas', iconName: 'camera' })

export const DashboardPageLayout = () => {
    const navigate = useNavigate();

    const navigateToExpenses = () => {
        navigate('/Expenses');
    };
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
                            <button className="editProfile-btn">
                                Edit profile
                            </button>
                        </div>
                    </div>
                </div>
                <div className="budget-section">
                    <div className="budget-section-wrap">
                        <h2>
                            Choose your tool
                            <i className='fa-solid fa-plus' />
                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </h2>
                        <div className="budget-items">
                            <div className="link-expenses">
                                <h3>
                                    Expenses
                                </h3>
                                {/*TEMPORARY*/} 
                                
                                <div className="budget-box">
                                    {/* <div className="button">*/}
                                        <button className='sign-btn' onClick={navigateToExpenses}>
                                            Expenses
                                        </button>
                                        <Routes>
                                            <Route path="/Expenses" element={<Expenses />} />
                                        </Routes>
                                    {/* </div> */}

                                </div>

                        <p>
                            Here is your own space
                        </p>
                        <button className="editProfile-btn">
                            Edit profile
                        </button>
                    </div>
                </div>
            </div>
            <div className="budget-section">
                <div className="budget-section-wrap">
                    <h2>
                        Choose your tool 
           
                    </h2>
                    <div className="budget-items">
                        <div className="link-expenses">
                            <h3>
                                Expenses
                            </h3>
                            <div className="budget-box">
                            
                            
                            </div>
                            <div className="link-income">
                                <h3>
                                    Income
                                </h3>
                                <div className="budget-box">

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

