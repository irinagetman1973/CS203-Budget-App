import React, { useState, useEffect, useContext } from 'react';

import { ExpenseTrackerContext } from '../context/context';

// import Form from '';
import List from './List';


const ExpenseTracker = () => {
  
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <div className='container-fluid'>
         {/* <Form /> */}
        <div className='container'>
                        {/*  */}
                        <h1 className='mt-3'>Your Income</h1>
                        <div className='row mt-3'>
                            <div className='col-sm'>
                                {/* <Budget /> */}
                            </div>
                        </div>
                        <h3 className='mt-3'>
                            Income balance ${balance}
                        </h3>
                        <div className='row row-n-gutters mt-3'>
                            <div className='col-sm-8'>
                                <List />
                            </div>
                            <div className='col-sm-4'>
                                {/* <Doughnut data={chartData} /> */}
                                here is going to be a doughnut
                            </div>
                        </div >
                        <h3 className='mt-3'>
                            Add Income
                        </h3>
                        <div className='row mt-3'>
                            <div className='col-sm'>
                                {/* <List /> */}
                            </div>

                        </div>

                    </div>
        
    </div>
   
  
   
  );
};

export default ExpenseTracker;