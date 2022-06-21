import React from 'react';

import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './components/Login.css'
import './components/SignUp.css';
import './components/DashboardPageLayout.css';

import Home from '../src/pages/Home'
import Login from '../src/pages/Login'
import SignUp from '../src/pages/SignUp'
import Dashboard from '../src/pages/Dashboard'
import Expenses from '../src/pages/Expenses'
import Income from '../src/pages/Income'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/log-in' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/expenses' element={<Expenses />} />
          <Route path='/income' element={<Income />} />
        </Routes>
      </Router>
    </>
  );

}
export default App;
// Irina