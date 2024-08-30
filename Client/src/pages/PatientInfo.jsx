import React from 'react';
import './PatientInfo.css'; 
import icon from '../assets/Report.webp'
import InfoGen from './InfoGen';

const PatientInfo = ({name,image,age,status}) => {
  return (
    <div className="PatientInfo">
        <section className="patients-list">
          <div className="patient-card">
            <img src={image} alt="Patient" className='patient-img'/>
            <p className='patient-info'>Age: {`${age}`}<br /><br/>Prescription: {`${status}`}</p>
          </div>
        </section>
          
      <InfoGen/>
    </div>
  );
};

export default PatientInfo;
