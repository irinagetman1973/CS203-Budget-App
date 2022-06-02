import React from 'react'
import "./Buttons.css"
import { Link } from 'react-router-dom';


export const Buttons = ({
  type,
  onClick
}) => {
  return (
    <>

      <div className='btn-wrap'>
        <Link to='/log-in'>
          <button
            className='login-btn'
            onClick={onClick}
            type={type}>
            Log in
          </button>
        </Link>
        <Link to='/sign-up'>
          <button
            className='sign-btn'
            onClick={onClick}
            type={type}>
            Sign up
          </button>
        </Link>

      </div>
    </>
  )
}

// Irina