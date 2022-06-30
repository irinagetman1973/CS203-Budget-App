import React, { useContext, useState } from 'react';

//Editing profile and the dashboard
export const EditProfile = (props) => {

	const [value, setValue] = useState(props.fname);

	return (
		<>
			<input
				placeholder="Name"
				type='name'
				class='form-control mr-3'
				id='name'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<button
				type='button'
				class='btn btn-primary'
				//Unable to save input
				onClick={() => props.handleSaveClick(value)}
			>
				Save
			</button>
		</>
	);
};

export default EditProfile;

{/*Brittany */ }