import React, { useContext } from 'react';
import {TiDelete} from 'react-icons/ti';
import { AppContext } from './context/AppContext';

const IncomeItem = (props) => {
  // const { dispatch } = useContext(AppContext)

  // const handleDeleteIncome = () => {
	// 	dispatch({
	// 		type: 'DELETE_INCOME',
	// 		payload: props.id
	// 	})
	// }

  return (
  <li className='list-group-item d-flex justify-content-between align-items-center'>
      {props.source}
      <div>
          <span className='tag tag-primary tag-pill mr-3'>
              $ {props.amount}
            </span>
            <TiDelete size='1.5em' ></TiDelete>
      </div>
  </li>
  )
}

export default IncomeItem
// Irina
