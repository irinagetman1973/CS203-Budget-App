import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from '../components/Navbar';
import { BudgetMock} from '../components/BudgetMock'
import IncomeList from '../components/IncomeList';
import AddIncomeForm from '../components/AddIncomeForm';

const Income = () => {
  return (
    <>
        <Navbar />
        <div className='container'>
            <h1 className='mt-3'>Your Income</h1>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <BudgetMock />
                </div>
            </div>
            <h3 className ='mt-3'>
                Income 
            </h3>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <IncomeList />
                </div>
            </div >
            <h3 className='mt-3'>
                Add Income
            </h3>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <AddIncomeForm />
                </div>

            </div>

        </div>
		
    </>
  )
}

export default Income
// Irina