import React, { useContext, useState } from 'react';


export const EditProfile = (props) => {


	const [value, setFname] = useState("");


	return (
		<>
			<input
				placeholder="Name"
				type='name'
				class='form-control mr-3'
				id='name'
				value={value}
				onChange={(event) => setFname(event.target.value)}
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