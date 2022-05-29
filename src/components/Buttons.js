import React from 'react'
import "./Buttons.css"
import { Link } from 'react-router-dom';


export const Buttons= ({
  type,
  onClick
}) => {
  return (
    <>
    
    <div className='btn-wrap'>
      <Link to ='/log-in'>
        <button 
          className='login-btn'
          onClick={onClick}
          type={type}>
            Log in
        </button>
      </Link>
      <Link to ='/sign-up'>
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


// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

// const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

// const SIZES = ['btn--medium', 'btn--large'];

// export const Button = ({
//   children,
//   type,
//   onClick,
//   buttonStyle,
//   buttonSize
// }) => {
//   const checkButtonStyle = STYLES.includes(buttonStyle)
//     ? buttonStyle
//     : STYLES[0];

//   const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

//   return (
//     <Link to='/sign-up' className='btn-mobile'>
//       <button
//         className={`btn ${checkButtonStyle} ${checkButtonSize}`}
//         onClick={onClick}
//         type={type}
//       >
//         {children}
//       </button>
//     </Link>
//   );
// };
