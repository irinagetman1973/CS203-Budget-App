import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../components/context/AppContext';


export const ExpenseList = () => {
	const { expenses } = useContext(AppContext)

	return (
		<ul className='List-group'>
			{expenses.map(((expenses) => (
				<ExpenseItem
					id={expenses.id}
					name={expenses.name}
					cost={expenses.cost} />
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