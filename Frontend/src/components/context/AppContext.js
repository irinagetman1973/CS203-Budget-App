import { createContext, useReducer } from "react";


const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
			return {
				...state,
				expenses: [...state.expenses, action.payload],
				
			}
		case 'DELETE_EXPENSE':
			return {
				...state,
				expenses: state.expenses.filter(
					(expense) => expense.id !== action.payload
				),
			}
		case 'SET_BUDGET':
			return {
				...state,
				budget: action.payload,
			}
		case 'SET_PROFILE':
			return {
				...state,
				profile: action.payload,
			}
		case 'ADD_INCOME':
			return {
				...state,
			income: [...state.income, action.payload]	
			}
		case 'DELETE_INCOME':
			return {
				...state,
				income: state.income.filter(
					(income) => income.id !== action.payload
				),	
			}
		default:
			return state;
	}
}

const initialState = {
	budget: 0,
	expenses: [],
	income: [],
}

export const AppContext = createContext();

export const AppProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value={{
				budget: state.budget,
				expenses: state.expenses,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	)
};

export default AppContext

{/*Brittany */ }