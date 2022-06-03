import React, { useState } from 'react';

import '../App.css';
import './DashboardPageLayout.css'

export const EditProfile = (props) => {

    const [value, setValue] = useState(props.budget);

    return (
        <>
            <div className="db-layout">
                <div className="banner--db">
                    <div className="banner-content">
                        <div className="db-box">
                            <div className="db-avatar">

                            </div>
                        </div>
                        <div className="greeting">
                            <h2>
                                Hi,Vanda
                            </h2>
                            <p>
                                Here is your own space
                            </p>
                        </div>
                    </div>
                </div>
            </div>

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