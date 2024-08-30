import React, { useState, useCallback } from 'react';
import './DoctorCardStyle.css'
import DocDetail from './DocDetail'

const DoctorCard = ({ name, degree, specialty, rating, available }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleModalClose = useCallback((e) => {
    e.stopPropagation();
    setShowModal(false);
  }, []);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  return (
    <div className="doctor-card" onClick={handleCardClick}>
      <div className="doctor-info">
        <h3 className="doctor-name">{name}</h3>
        <p className="doctor-details">{degree}, {specialty}</p>
        <p className="doctor-availability">Rating: {rating} {available ? ', Available' : ', Not Available'}</p>
      </div>
      {showModal && (
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-content">
            <DocDetail name={name} degree={degree} specialty={specialty} rating={rating} available={available} />
            <button className="close-button" onClick={handleModalClose}>X</button>
            <div className="image-upload">
              <h3 className='upload-text'>Please Upload your Report</h3>
              <input type="file" onChange={handleImageChange}  className='upload-btn'/>
              {selectedImage && (
                <>
                
                <img src={URL.createObjectURL(selectedImage)} alt="Uploaded Image" />
                
                </>
              )}
              <section className="root-cause-details-patient">
                <h2 className='root-cause-heading'>Root Cause: </h2>
                <div className='root-cause-container'>
                  <p className='root-cause-desc-patient'>This due to that</p>
          
                </div>
              </section>
              <section className="summary-details-patient">
                <h2 className='summary-heading'>Summary: </h2>
                <div className='summary-container'>
                  <p className='summary-desc-patient'>This due to that</p>
          
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorCard;