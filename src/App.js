import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";
import Search from "./components/Search";

export default function App(){
    const [searchTxt, setSearchTxt] = useState('');
    console.log("homepage");
    return(
        <AppProvider>
            <div className="container">
            <h1 className="mt-3">My Budget Planner</h1>
            <div className="row mt-3">
                <div className="col-md">
                    <Budget />
                </div>
                <div className="col-md">
                    <Remaining />
                </div>
                <div className="col-md">
                    <ExpenseTotal />
                </div>
            </div>
            <Search handleSearchTxt={setSearchTxt}/>
            <h3 className="mt-3">Expenses</h3>
            <div className="row mt-3">
                <div className="col-sm">
                    <ExpenseList txt={searchTxt}/>
                </div>
            </div>
            <h3 className="mt-3">Add expenses</h3>
            <div className="row mt-3">
                <div className="col-sm">
                    <AddExpenseForm />
                </div>
            </div>
        </div>
        </AppProvider>
        
    );
}