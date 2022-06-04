import React, {useContext} from 'react';
import { AppContext1 } from './context/AppContext1';

export const BudgetMock = () => {
    const {budget} = useContext(AppContext1)
   return(
       <div className='alert alert-secondary'>
           <span>Budget: $ {budget} </span>

       </div>
   ) 
}
export default BudgetMock
// Irina