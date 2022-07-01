import React, { useState,  useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ExpenseTrackerContext } from '../context/context';
import formatDate from '../../utils/formatDate';
import { v4 as uuidv4 } from 'uuid';
import { incomeCategories, expenseCategories } from '../../constants/categories';
import List from './List';
import DetailsCard from '../Details';


const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: formatDate(new Date()),
  };

export const ExpenseTracker = () => {
    const [formData, setFormData] = useState(initialState)
    const { balance,addTransaction } = useContext(ExpenseTrackerContext);
    const [open, setOpen] = React.useState(false);


    const createTransaction = (event) => {
        event.preventDefault()
        alert ('category  ' + formData.category + 'amout  ' + formData.amount )

      if (Number.isNaN(Number(formData.amount)) || !formData.date.includes('-')) return;
  
      if (incomeCategories.map((iC) => iC.type).includes(formData.category)) {
        setFormData({ ...formData, type: 'Income' });
      } else if (expenseCategories.map((iC) => iC.type).includes(formData.category)) {
        setFormData({ ...formData, type: 'Expense' });
      }
  
      setOpen(true);
      addTransaction({ ...formData, amount: Number(formData.amount), id: uuidv4() });
      setFormData(initialState);
    };
  

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
                                {/* <DetailsCard /> */}
                            </div>
                        </div>
                      
                      
                        <h3 className='mt-3'>Add income</h3>
                            <form onSubmit={createTransaction}>
                                <div className=' row mt-3'>
                                    <div className='col-sm-4'>
                                        
                                            <div class="form-group">
                                                <label >Category</label>
                                                <select class="form-control" 
                                                        required='required'
                                                        id='category' 
                                                        defaultValue={formData.category} 
                                                        onChange={(event)=>setFormData(...formData, event.target.category)}>
                                                        {selectedCategories.map((c) =>
                                                        <option key={c.type} value={c.type}>{c.type}</option>)}
                                                </select>
                                            </div>
                                            
                                    </div>
                                    <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label>Amount </label>
                                                    <input  class="form-control" 
                                                            required='required'
                                                            id="amount" 
                                                            type="text" 
                                                            defaultValue= {formData.amount}
                                                            onChange = {(event)=> setFormData(...formData, event.target.amount)}>
                                                    </input>
                                                </div>
                                    </div>
                                    <div class="col-sm-4">
                                                <div class="form-group">
                                                        <label>Date </label>
                                                        <input  class="form-control"
                                                                required='required'
                                                                id="date" 
                                                                type="date" 
                                                                defaultValue={formData.date}
                                                                onChange={(event)=>setFormData(...formData,event.target.date)}>
                                                        </input>
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
                            </form> 
                    </div>
    
    
   );
};

export default ExpenseTracker;