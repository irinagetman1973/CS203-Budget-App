import React from 'react'
import './Hero.css';

export const Hero = () => {
  return (
    <div className='hero-container'>
        <h1 >
            Don't get trapped. Learn safer ways to spend this year 
        </h1>
      <img src='../images/Investing-cuate 1.png' alt='grow money'/>
    </div>
  ) 
}


// return (
//     <div className='hero-container'>
//       <video src='/videos/video-1.mp4' autoPlay loop muted />
//       <h1>ADVENTURE AWAITS</h1>
//       <p>What are you waiting for?</p>
//       <div className='hero-btns'>
//         <Button
//           className='btns'
//           buttonStyle='btn--outline'
//           buttonSize='btn--large'
//         >
//           GET STARTED
//         </Button>
//         <Button
//           className='btns'
//           buttonStyle='btn--primary'
//           buttonSize='btn--large'
//           onClick={console.log('hey')}
//         >
//           WATCH TRAILER <i className='far fa-play-circle' />
//         </Button>
//       </div>
//     </div>
//   );
// }