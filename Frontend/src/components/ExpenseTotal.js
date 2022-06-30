import React, { useContext } from 'react';
import { AppContext } from './context/AppContext';

//Calculates the Expense total for the Expense page 
export const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext)

    const total = expenses.reduce((total, item)=>{
        return (total += item.cost)
    }, 0)

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: ${total}</span>
        </div>
    )
}

export default ExpenseTotal

{/*Brittany */ }