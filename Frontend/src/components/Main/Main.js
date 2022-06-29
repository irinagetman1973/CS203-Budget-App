import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ExpenseTrackerContext } from '../context/context';
import NewTransactionForm from './Form';
import './Main.css'

// import Form from '';
import List from './List';


const ExpenseTracker = () => {
  
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <div className='container'>
                        
        <h1 className='mt-3'>Your Income</h1>
        <h3 className='mt-3'>Income balance ${balance}</h3>
        <div className='row row-no-gutters mt-3'>
            <div className='col-sm-8'>
                <List />
            </div>
            <div className='col-sm-4'>
            {/* <Doughnut data={chartData} /> */}
            here is going to be a doughnut
            </div>
        </div>
      
        <h3 className='mt-3'>Add income</h3>
        <div className=' row mt-3'>
            <div className='col-sm-4'>
                <form>
                    <div class="form-group">
                        <label >Category</label>
                        <select class="form-control" id='inputSuccess2'>
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
                </form> 
                    
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                    <label>Amount </label>
                    <input class="form-control" id="inputSuccess2" type="number" value="Amount"></input>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="form-group">
                        <label>Date </label>
                        <input class="form-control" id="inputSuccess2" type="date" value="Date"></input>
                </div>
            </div>
            
        </div>
        <div class='row'>
            <div className='col-sm'>
                <button type='submit' className='btn-warning btn-lg'>
                    Save
                </button>
             </div>
        </div> 
    </div>
   );
};

export default ExpenseTracker;