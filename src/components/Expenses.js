import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseList from './components/ExpenseList';
import AddExpense from './AddExpense';
import { AppContext, AppProvider } from './context/AppContext';

const Expenses = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>My Expenses</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Add Expense</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AddExpense />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default Expenses;