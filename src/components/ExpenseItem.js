import React, { useContext } from "react";
import { TiDelete } from 'react-icons/ti';
import { AppContext } from "../context/AppContext";

export default function ExpenseItem(props) {
    const {dispatch} = useContext(AppContext);
    const handleDelete = ()=>{
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    }
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div>
                <span className="badge bg-primary  mr-3">
                    ${props.cost}   
                </span>
                <TiDelete className="cursor-pointer" style={{ marginLeft: '0.5rem' }} onClick={handleDelete} size='1.5em'></TiDelete>
            </div>
        </li>
    );
}
