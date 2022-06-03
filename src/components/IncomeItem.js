import React from 'react'
import {TiDelete} from 'react-icons/ti'

const IncomeItem = (props) => {
  return (
  <li className='list-group-item d-flex justify-content-between align-items-center'>
      {props.source}
      <div>
          <span className='badge badge-primary badge-pill mr-3'>
              $ {props.amount}
            </span>
            <TiDelete size='1.5em'></TiDelete>
      </div>
  </li>
  )
}

export default IncomeItem
// Irina
