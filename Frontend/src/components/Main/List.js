import React, { useContext } from 'react';
import {TiDelete} from 'react-icons/ti';

import { ExpenseTrackerContext } from '../context/context';


const List = () => {
   
    const { transactions, deleteTransaction } = useContext(ExpenseTrackerContext);
  
    return (
      <ul  className='list-group'>
        {transactions.map((transaction) => (
              <li className='list-group-item d-flex justify-content-between align-items-center'>
              {transaction.category}
              <div>
                  <span className='tag tag-primary tag-pill mr-3'>
                      {/* $ {transaction.amount} */}
                      {`$${transaction.amount}           ${transaction.date}`}
                  </span>
                  <TiDelete size='1.5em'onClick={() => deleteTransaction(transaction.id)} ></TiDelete>
              </div>
          </li>
        ))}
      </ul>
    );
  };
  
  export default List;