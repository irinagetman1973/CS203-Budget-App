import React, { useContext, useState } from 'react';

import EditBudget from './EditBudget';
import ViewBudget from './ViewBudget';
import { AppContext } from '../components/context/AppContext';


export const Budget = () => {
    const { budget, dispatch } = useContext(AppContext)

    const [isEditing, setIsEditing] = useState(false)

    const handleEditClick = () => {
        setIsEditing(true)
    }

    const handleSaveClick = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        })
        setIsEditing(false)
    }

    return (
        <div className='alert alert-dark p-3 d-flex align-items-center justify-content-between'>
            {isEditing ? (
                <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
            ) : (
                <ViewBudget handleEditClick={handleEditClick} budget={budget} />
            )
            }
            {/* <span>Budget: ${budget} </span> */}

        </div>
    )
}

export default Budget

{/*Brittany */ }