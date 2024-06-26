import React, {useContext, useState} from "react";
import { AppContext } from "../context/AppContext";
import EditBudget from "./EditBudget";
import ViewBudget from "./ViewBudget";

export default function Budget(){
    const { budget, dispatch } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {
		dispatch({
			type: 'SET_BUDGET',
			payload: value,
		});
		setIsEditing(false);
	};

    return (
        <div className='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
        {isEditing ? (
            <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
        ) : (
            <ViewBudget handleEditClick={handleEditClick} budget={budget} />
        )}
    </div>
    );
}