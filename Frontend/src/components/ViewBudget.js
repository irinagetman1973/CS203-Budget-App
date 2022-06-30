import React from 'react';

//Displays budget for budget page
export const ViewBudget = (props) => {
	return (
		<>
			<span>Budget: ${props.budget}</span>
			<button type='button' class='btn btn-primary' onClick={props.handleEditClick}>
				Edit
			</button>
		</>
	);
};

export default ViewBudget;

{/*Brittany */ }