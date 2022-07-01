import React from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import useTransactions from '../useTransactions';


const DetailsCard = ({ title }) => {
  const { total, chartData } = useTransactions(title);
 

//   this.state = {
//     lineChartData: {
//         labels: ['01', '02', '03', '04', '05', '06'],
//         datasets: [{
//             label: 'X',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)'

//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)'

//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// } 

  return (
    <div className="App">
        <h3>${total},</h3>
        {/* <Doughnut 
            data={{
                labels:["Red","Blue","Yellow","Green"]
            }}
            height={240}
            width ={240}

        /> */}
        {/* <Line
            data={this.state.lineChartData}
            options={{ maintainAspectRatio: true }}
        /> */}

    </div>
  );
};

export default DetailsCard;