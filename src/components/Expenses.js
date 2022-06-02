import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Budget } from './Budget';
import { Remaining } from './Remaining';
import { AddExpense } from './AddExpense';
import ExpenseTotal from '../ExpenseTotal';
import { ExpenseList } from './ExpenseList';
import { AppProvider } from './context/AppContext';


export const Expenses = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Expenses</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget />
                    </div>
                    <div className='col-sm'>
                        <Remaining />
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                </div>
                <h3 className='mt-3'>Expenses List</h3>
                <div className='mt-3'>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Add Expense</h3>
                <div className='mt-3'>
                    <div className='col-sm'>
                        <AddExpense />
                    </div>
                </div>
            </div>
        </AppProvider>
    )
}

export default Expenses

{/*Brittany */ }