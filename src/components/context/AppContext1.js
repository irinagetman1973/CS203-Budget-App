import { createContext, useReducer } from "react"

const AppReducer = (state,action) =>{
    switch (action.type){
        case 'ADD_INCOME':
       
            return{
               ...state,
               income:[...state.income, action.payload]
            } 
    }
}

const initialState = {
    budget: 100000,
    income:[
        {id:12, source: 'Salary', amount:500},
        {id:12, source: 'Dividends', amount: 70},
        {id:12, source: 'Rental', amount: 600 },
        {id:12, source: 'Investments', amount: 50 },
        {id:12, source: 'Side Hustle', amount: 500},

    ], 
}    

export const AppContext1 = createContext()

export const AppProvider1 =(props) =>{
    const [state,dispatch] = useReducer( AppReducer , initialState)
    return (
		< AppContext1.Provider
			value={{
				income: state.income,
				budget: state.budget,
				dispatch,
			}}
		>
			{props.children}
		</AppContext1.Provider>
	);
}