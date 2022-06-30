import React, { useContext, useState } from 'react';

import EditBudget from './EditBudget';
import ViewBudget from './ViewBudget';
import { AppContext } from '../components/context/AppContext';

//Budget page for Expense page
export const Budget = () => {
    const { budget, dispatch } = useContext(AppContext)

    const [isEditing, setIsEditing] = useState(false)

    const handleEditClick = () => {
        setIsEditing(true)
    }

    //Using AppContext to update and re-render components
    const handleSaveClick = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        })
        setIsEditing(false)
    }

    //Allows the user to edit and view their budget
    return (
        <div className='alert alert-dark p-2 d-flex align-items-center justify-content-between'>
            {isEditing ? (
                <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
            ) : (
                <ViewBudget handleEditClick={handleEditClick} budget={budget} />
            )
            }
        </div>
    )
}

export default Budget

{/*Brittany */ }