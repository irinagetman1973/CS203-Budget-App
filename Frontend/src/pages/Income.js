import React from 'react';

import '../App.css'
import { Navbar } from '../components/Navbar';
import {Doughnut} from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css'
import useTransactions from '../useTransactions';
import IncomeList from '../components/IncomeList';
import AddIncomeForm from '../components/AddIncomeForm';
import { AppProvider } from '../components/context/AppContext';


export const Income = () => {
    return (
        <>
            <Navbar />
            <AppProvider>
                    <div className='container'>
                        {/*  */}
                        <h1 className='mt-3'>Your Income</h1>
                        <div className='row mt-3'>
                            <div className='col-sm'>
                                {/* <Budget /> */}
                            </div>
                        </div>
                        <h3 className='mt-3'>
                            Income 
                        </h3>
                        <div className='row row-n-gutters mt-3'>
                            <div className='col-sm-8'>
                                <IncomeList />
                            </div>
                            <div className='col-sm-4'>
                                {/* <Doughnut data={chartData} /> */}
                                here is going to be a doughnut
                            </div>
                        </div >
                        <h3 className='mt-3'>
                            Add Income
                        </h3>
                        <div className='row mt-3'>
                            <div className='col-sm'>
                                <AddIncomeForm />
                            </div>

                        </div>

                    </div>
            </AppProvider>
        </>
    )
}

export default Income

