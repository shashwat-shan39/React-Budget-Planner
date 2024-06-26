import { createContext, useReducer, useEffect } from "react";

const AppReducer = (state, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses,action.payload]
            };
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
            };
        default:
            return state
    }
};
const getLocalStorageData = () => {
    const data = localStorage.getItem('expenses-data-items');
    return data ? JSON.parse(data) : null;
}

const initialState = getLocalStorageData() || {
    budget: 2000,
    expenses: [
        {id: 22, name: 'Shopping', cost: 50},
        {id: 23, name: 'Holiday', cost: 500},
        {id: 24, name: 'Education', cost: 500},
    ]
};

export const AppContext = createContext();

export const AppProvider = (props) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    useEffect(() => {
        localStorage.setItem('expenses-data-items', JSON.stringify(state));
    }, [state]);

    return (<AppContext.Provider value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
    }}>{props.children}</AppContext.Provider>)
}