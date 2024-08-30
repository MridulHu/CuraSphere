import React, { useState } from 'react'
import './DoctorStyles.css'

import patientListData from '../utils/PatientList'
import { NavLink } from 'react-router-dom'
import PatientInfo from './PatientInfo'

function DoctorPage() {
    const [selectedPatient, setSelectedPatient] = useState("null")
    const [showPatientInfo, setShowPatientInfo] = useState(false)
    const [selectedPatientList,setSelectedPatientList] = useState(null)
    const {name,image,age,status} = {...selectedPatientList}

    const handlePatientClick = (patient) => {
    setSelectedPatient(patient)
    setShowPatientInfo(true)
    };
    const handlePatientList = (patientList) =>{
        setSelectedPatientList(patientList)
    };
    

  const handleClosePatientInfo = () => {
    setShowPatientInfo(false)
  }
  return (
    
    <div className='doctor-page-container'>
        <h1 className='doctor-page-heading'>
            Patient List
            <hr/>
        </h1>
        {
        patientListData.map(({name,image,age,status}) => 
            (
                <>
                
                    <div className='doctor-page-patient-container' key={name} 
                    onClick={() => {
                            handlePatientClick(name);
                            handlePatientList({name,image,age,status});
                        }}>
                        <div className='doctor-page-patient-details'>
                            <h3 className='doctor-page-patient-name'>{name}</h3>
                            <p className='doctor-page-patient-age'>{age}</p>
                            <p className='doctor-page-patient-status'>{status}</p>
                        </div>
                        <img src={image} className='doctor-page-patient-img' alt= {`${name}Img`}/>
                    </div>
                </>
            ))}
            {showPatientInfo && (
                <div className='doctor-page-patient-info-container'>
                    <div className='patient-info-modal'>
                        <div className='patient-info-content'>
                            <div className='patient-PatientInfo-header'>
                                <h2 className='patient-info-name'>{selectedPatient}</h2>
                                <button className='patient-info-close' onClick={handleClosePatientInfo}>x</button>
                            </div>
                            <PatientInfo 
                            name = {name}
                            age = {age}
                            image={image}
                            status = {status}
                            />
                            
                        </div>
                    </div>
                </div>
            )}
    </div>
  )
}

export default DoctorPage