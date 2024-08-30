import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

function DocDetail({ name, degree, specialty, rating, available }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleCardClick = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };
  return (
    
    <>
        <div className='doc-details'>
          
          <div className='doc-details-heading'>
              
              <h2 className='doc-name'>{name}</h2>
              
              
          </div>
        </div>

    </>
  )
}

export default DocDetail