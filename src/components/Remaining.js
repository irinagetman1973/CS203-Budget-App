import React, { useContext } from 'react';
import { AppContext } from './context/AppContext';

export const Remaining = () => {
    const { expenses, budget } = useContext(AppContext)

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost)
    }, 0)

    const alretType = totalExpenses > budget ? 'alert-danger' : 'alert-success'

    return (
        <div className={`alert ${alretType}`}>
            <span>Remaining: ${budget - totalExpenses}</span>
        </div>
    )
}

export default Remaining

{/*Brittany */ }