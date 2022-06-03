import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { AppContext } from './context/AppContext';


export const AddExpense = () => {
    const { dispatch } = useContext(AppContext)

    const [name, setName] = useState('')
    const [cost, setCost] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()

        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        })

        setName('')
        setCost('')
    }

    return (
        <form on onSubmit={onSubmit}>
            <div className='row'>
                <div className='col-sm'>
                    <label for='name'>Name</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='name'
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className='col-sm'>
                    <label for='cost'>Cost</label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='name'
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                    />
                </div>
                <div className='row mt-2'>
                    <div className='col-sm'>
                        <button type='submit' className='sign-btn'>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}


export default AddExpense

{/*Brittany */ }