import React from 'react';

import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import './App.css';
import './components/index';

import Home from '../src/pages/Home'
import Login from '../src/pages/Login'
import SignUp from '../src/pages/SignUp'
// import Dashboard from '../src/pages/Dashboard'
// import Expenses from '../src/pages/Expenses'
// import Income from '../src/pages/Income'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/'  element=  {<Home/>} />
          <Route path='/sign-up' element=  {<SignUp/>} />
          <Route path='/log-in' element=   {<Login/>} />
          {/*<Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/budget' element=   {<Budget/>} />
          <Route path='/income' element=   {<Income/>} />
          <Route path='/expenses' element= {<Expenses/>} />
           */}
        </Routes>
      </Router>
    </>
  );
}
export default App;
//27/05 comment:
//I am planning to make App.js as combination of different pages
// so will move all the JSX elements to the assigned  pages
// below an example from stackOverflow

//   import React from "react";
//import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Switch } from "react-router-dom";  
// const rootElement = document.getElementById("root");
//  ReactDOM.render(
//    <BrowserRouter>
//     <Switch>
//      <Route exact path="/" element={Page1} />
//      <Route path="/page2" element={Page2} />
//    </Switch>
//    </BrowserRouter>,
//    rootElement
//  );