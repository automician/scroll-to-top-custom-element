import React from 'react';
import './Style.scss';
import ArrowImg from './images/arrowupcircle_top_icon.png';

export const ScrollToTopButton = () => {

  return (
    <div className='scroll-button'>
      <img src={ArrowImg} 
        alt="scroll to top button" 
        className='scroll-button-img' 
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      />
    </div>
  )
}