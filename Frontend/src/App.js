import React from 'react';

import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import './components/Login.css'
import './components/SignUp.css';
import './components/DashboardPageLayout.css';

import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Expenses from './pages/Expenses'
import Income from './pages/Income'
import NotFound from './components/NotFound';


//Navigation
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
          <Route path='/*' element={ <NotFound />} />
        </Routes>
      </Router>
    </>
  );

}
export default App;
// Irina