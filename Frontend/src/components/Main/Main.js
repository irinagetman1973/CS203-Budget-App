import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ExpenseTrackerContext } from '../context/context';
import NewTransactionForm from './Form';
import formatDate from '../../utils/formatDate';
import { v4 as uuidv4 } from 'uuid';
import { incomeCategories, expenseCategories } from '../../constants/categories';
import List from './List';
import useTransactions from '../../useTransactions';

import DetailsCard from '../Details';



const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: formatDate(new Date()),
  };

const ExpenseTracker = () => {
    const [formData, setFormData] = useState(initialState)
    const { balance,addTransaction } = useContext(ExpenseTrackerContext);
 
    const createTransaction = () =>{
        const transaction = {...formData, amount: Number(formData.amount),
        id:uuidv4()}

        addTransaction(transaction);
        setFormData(initialState);
    }

const selectedCategories = formData.type==='Income'? incomeCategories: expenseCategories;

  return (
    <div className='container'>
                        
        <h1 className='mt-3'>Your Income</h1>
        <h3 className='mt-3'>Income balance ${balance}</h3>
           
        <div className='row row-no-gutters mt-3'>
            <div className='col-sm-8'>
                <List />
            </div>
            <div className='col-sm-4'>
                <DetailsCard />
                
            </div>
        </div>
      
      
        <h3 className='mt-3'>Add income</h3>
        <div className=' row mt-3'>
            <div className='col-sm-4'>
                <form>
                    <div class="form-group">
                        <label >Category</label>
                        <select class="form-control" 
                        id='inputSuccess2' 
                        value={formData.category} 
                        onChange={(e)=>setFormData(...formData, e.target.category)}>
                            {selectedCategories.map((c) =>
                            <option key={c.type} value={c.type}>{c.type}</option>)}
                            

                        </select>

                    </div>
                </form> 
                    
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label>Amount </label>
                    <input class="form-control" 
                    id="inputSuccess2" 
                    type="number" 
                    value= {formData.amount}
                    onChange = {(e)=> setFormData(...formData, e.target.amount)}></input>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                        <label>Date </label>
                        <input class="form-control"
                         id="inputSuccess2" 
                        type="date" 
                        value={formData.date}
                        onChange={(e)=>setFormData(...formData,e.target.date)}></input>
                </div>
            </div>
            
        </div>
        <div class='row'>
            <div className='col-sm'>
                <button type='submit' 
                className='btn-warning btn-lg'
                onClick={createTransaction}>
                    Save
                </button>
             </div>
        </div> 
    </div>
   );
};

export default ExpenseTracker;