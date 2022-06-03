import React from 'react'

export const AddIncomeForm = () => {
    return (
        <form>
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
                    ></input>

                </div>
                <div className='col-sm'>
                    <button
                        type='submit'
                        className='btn btn-primary'>Save</button>

                </div>
            </div>
        </form>
    )
}

export default AddIncomeForm
// Irina
