import React from 'react';
import {TiDelete} from 'react-icons/ti';
import { AppContext } from './context/AppContext';

const IncomeItem = (props) => {
  const { dispatch } = useContext(AppContext)

  const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_INCOME',
			payload: props.id
		})
	}

  return (
  <li className='list-group-item d-flex justify-content-between align-items-center'>
      {props.source}
      <div>
          <span className='tag tag-primary tag-pill mr-3'>
              $ {props.amount}
            </span>
            {/* <TiDelete size='1.5em' onClick={handleDeleteIncome}></TiDelete> */}
      </div>
  </li>
  )
}

export default IncomeItem
// Irina
