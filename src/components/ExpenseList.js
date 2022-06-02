import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext, AppProvider } from './context/AppContext';
import ExpenseItem from './ExpenseItem';

export const ExpenseList = () => {
	const expenses = [
		{ id: 123123, name: "Everyday", cost: 50 },
		{ id: 123123, name: "Living", cost: 40 },
		{ id: 123123, name: "Regular", cost: 70 },
		{ id: 123123, name: "Personal", cost: 20 }
	]

	return (
		<ul className='List-group'>
			{expenses.map(((expenses)=>(
				<ExpenseItem 
				id={expenses.id} 
				name={expenses.name} 
				cost={expenses.cost}/>
			)))}
		</ul>
	)

	// const { dispatch } = useContext(AppContext);

	// const handleDeleteExpense = () => {
	// 	dispatch({
	// 		type: 'DELETE_EXPENSE',
	// 		payload: props.id,
	// 	})
	// }

	// return (
	// 	<li className='list-group-item d-flex justify-content-between align-items-center'>
	// 		{props.name}
	// 		<div>
	// 			<span className='badge badge-primary badge-pill mr-3'>
	// 				£{props.cost}
	// 			</span>
	// 			<TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
	// 		</div>
	// 	</li>
	// )
}

export default ExpenseList