import React, { useState, useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';

// import formatDate from '../../../utils/formatDate';
import { ExpenseTrackerContext } from '../context/context';
import { incomeCategories, expenseCategories } from '../../constants/categories';


const initialState = {
  amount: '',
  category: '',
  type: 'Income',
//   date: formatDate(new Date()),
};


const Form = () => {
    
const [formData, setFormData] = useState(initialState)
const {addTransaction}=useContext(ExpenseTrackerContext)
      return(
            <div class="form-group">
                <label for ='sel1'>Please select category:</label>
                <select class="form-control" id='sel1'>
                    <option>Business</option>
                    <option>Investments</option>
                    <option>Side Hustle</option>
                    <option>Deposits</option>
                    <option>Lottery</option>
                    <option>Salary</option>
                    <option>Gifts</option>
                    <option>Savings</option>
                    <option>Rental income</option>

                </select>

            </div>
    
      );  
};

export default Form;
