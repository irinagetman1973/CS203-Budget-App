import React, { useContext } from 'react';
import { AppContext } from '../components/context/AppContext';

export const Budget = () => {
    const { budget } = useContext(AppContext)
    return (
        <div className='alert alert-secordary'>
            <span>Budget: ${ budget} </span>
        </div>
    )
}

export default Budget