import React, { useContext } from 'react';
import { AppContext } from './components/context/AppContext';

export const ExpenseTotal = () => {
    const { expenses } = useContext(AppContext)

    const totalExpenses = expenses.reduce((total, item)=>{
        return (total += item.cost)
    }, 0)

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: $50</span>
        </div>
    )
}

export default ExpenseTotal

{/*Brittany */ }