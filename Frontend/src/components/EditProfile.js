import React, { useState } from 'react';


export const EditProfile = (props) => {

	const [value, setValue] = useState(props.EditProfile);

	return (
		<>
			<input
				required='required'
				type='name'
				class='form-control mr-3'
				id='name'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<button
				type='button'
				class='btn btn-primary'
				onClick={() => props.handleSaveClick(value)}
			>
				Save
			</button>
		</>
	);
};

export default EditProfile;

{/*Brittany */ }