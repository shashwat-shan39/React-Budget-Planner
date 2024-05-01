import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function ExpenseTotal(){
    const {expenses, budget} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    },0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`} style={{ paddingTop: '22px' , paddingBottom: '22px'}}>
            <span style={{  paddingTop: '12px' , paddingBottom: '12px' }}>Spent so far: ₹{totalExpenses}</span>
        </div>
    );
}