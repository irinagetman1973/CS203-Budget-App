import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../useTransactions';


const DetailsCard = ({ title }) => {
  const { total, chartData } = useTransactions(title);
 

  const data = [
    { value: 40 },
    { value: 25 },
    { value: 15 },
    { value: 8 },
    { value: 2 }
  ];

  return (
    <div className="App">
        <h3>${total},</h3>
     
    </div>
  );
};

export default DetailsCard;