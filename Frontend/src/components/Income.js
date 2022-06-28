import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


import IncomeList from '../components/IncomeList';
import AddIncomeForm from '../components/AddIncomeForm';
import { AppProvider } from '../components/context/AppContext';

export const Income = () => {
    return (
        <>
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
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <IncomeList />
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

//irina

