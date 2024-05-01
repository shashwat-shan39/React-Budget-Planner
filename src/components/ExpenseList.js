import React, {useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

export default function ExpenseList({ txt }) {
    const { expenses } = useContext(AppContext);
    return (
        <ul className="list-group">
            {expenses.map((expense) => (
                expense.name.toLowerCase().includes(txt) ? (
                    <ExpenseItem
                        key={expense.id}
                        id={expense.id}
                        name={expense.name}
                        cost={expense.cost}
                    />
                ) : null
            ))}
        </ul>
    );
}
