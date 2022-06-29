import React from 'react';

import '../App.css'
import { Navbar } from '../components/Navbar';
import {Doughnut} from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.min.css'
import useTransactions from '../useTransactions';
import IncomeList from '../components/IncomeList';
import AddIncomeForm from '../components/AddIncomeForm';
import { AppProvider } from '../components/context/AppContext';

import ExpenseTracker from '../components/Main/Main';
import List from '../components/Main/List';


export const Income = () => {
    return (
        <>
            <Navbar />
            <ExpenseTracker />
       
            
        </>
    )
}

export default Income

