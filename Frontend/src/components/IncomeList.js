import React, {useContext} from 'react'
import IncomeItem from './IncomeItem'
import { AppContext } from './context/AppContext'

const IncomeListDisplay = () =>{
  const income = [
      {id:123, source: "Salary", amount : 500},
      {id:123, source: "Dividends", amount : 50},
      {id:123, source: "Rental", amount : 50},
      {id:123, source: "Investments", amount : 50},
      {id:123, source: "Side Hustle", amount : 5000}

  ]
    return (
    <ul className='list-group'>
        {income.map((income) => (
          <IncomeItem
          id={income.id}
          source={income.source}
          amount={income.amount} 
          />  
        ))}
    </ul>
  )
}

export default IncomeListDisplay
// Irina