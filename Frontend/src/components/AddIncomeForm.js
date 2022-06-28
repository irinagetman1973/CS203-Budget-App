import React, { useState, useContext } from 'react'
import { AppContext1 } from './context/AppContext1'
import { v4 as uuidv4 } from 'uuid'
import { type } from '@testing-library/user-event/dist/type'

export const AddIncomeForm = () => {
    const { dispatch } = useContext(AppContext1)
    const [source, setSource] = useState('')
    const [amount, setAmount] = useState('')
    const onSubmit = (event) =>{
        event.preventDefault()
        // alert('source' + source + 'amount' + amount)
        const income={
            id:uuidv4(),
            source:source,
            amount: parseInt(amount)
        }
        dispatch({
            type: 'ADD_INCOME',
            payload : income
        })
    }

    return (
        <form onSubmit={ onSubmit }>
            <div className='row'>
                <div className='col-sm'>
                    <label for='source' >
                        Source
                    </label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='source'
                        value={source}
                        onChange = {(event)=> setSource(event.target.value)}
                    ></input>

                </div>
                <div className='col-sm'>
                    <label for='amount'>
                        Amount
                    </label>
                    <input
                        required='required'
                        type='text'
                        className='form-control'
                        id='amount'
                        value={amount}
                        onChange = {(event)=> setAmount(event.target.value)}
                    ></input>
                </div>
                <div className='row mt-2'>
                    <div className='col-sm'>
                        <button
                            type='submit'
                            className=' btn-warning btn-lg'>Save
                            </button>

                    </div>
                </div>
                
            </div>
        </form>
    )
}

export default AddIncomeForm
// Irina
