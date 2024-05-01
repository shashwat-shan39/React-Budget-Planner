import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { v4 as uuidv4} from 'uuid';

export default function AddExpenseForm(){
    const {dispatch} = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const handleSubmit = (event) =>{
        event.preventDefault();
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost)
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });
        setName('');
        setCost('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row align-items-end">
                <div className="col-md">
                    <label htmlFor="name" className="mt-3">Name</label>
                    <input
                     required="required"
                     type="text" 
                     className="form-control mt-2" 
                     id="name"
                     value={name}
                    onChange={(e)=>setName(e.target.value)}
                     ></input>
                </div>
                <div className="col-md">
                    <label htmlFor="cost" className="mt-3">Cost</label>
                    <input 
                     required="required"
                     type="text"
                     className="form-control mt-2" 
                     id="cost"
                     value={cost}
                     onChange={(e) => setCost(e.target.value)}
                     ></input>
                </div>
                <div className="col-md-auto">
                    <button type="submit" className="btn btn-primary mt-3">Save</button>
                </div>
            </div>
        </form>
    );
}
