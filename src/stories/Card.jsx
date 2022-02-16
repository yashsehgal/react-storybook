import React from 'react';
import './card.css';

export const Card = ({ children, ...props }) => {
  return (
    <div className='card'>
      {children ? children : <React.Fragment></React.Fragment>}
    </div>
  )
};