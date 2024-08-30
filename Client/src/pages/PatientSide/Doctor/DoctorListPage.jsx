// src/App.js
import React from 'react';
import DoctorCard from './DoctorCard';
import logo from '../../../assets/logo.png';

const doctors = [
  {
    name: 'Dr. John Smith',
    degree: 'MD',
    specialty: 'Cardiology',
    rating: '4.8/5',
    available: true,
    image: '', // Replace with actual image URL or leave empty for placeholder
  },
  {
    name: 'Dr. Emily Davis',
    degree: 'MBBS',
    specialty: 'Dermatology',
    rating: '4.7/5',
    available: false,
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    name: 'Dr. Michael Brown',
    degree: 'PhD',
    specialty: 'Neurology',
    rating: '4.9/5',
    available: true,
    image: '', // Replace with actual image URL or leave empty for placeholder
  },
  {
    name: 'Dr. Sarah Lee',
    degree: 'MD',
    specialty: 'Pediatrics',
    rating: '4.6/5',
    available: true,
    image: `${logo}`, // Replace with actual image URL
  },
  {
    name: 'Dr. Sarah Lee',
    degree: 'MD',
    specialty: 'Pediatrics',
    rating: '4.6/5',
    available: true,
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
  {
    name: 'Dr. Sarah Lee',
    degree: 'MD',
    specialty: 'Pediatrics',
    rating: '4.6/5',
    available: true,
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },
];

function DoctorListPage() {
    
  return (
    <div className="app-container">
      <h1 className="heading">Choose Your Doctor</h1>
      <p className="subheading">
        Browse from our list of qualified doctors to find the best fit for your needs.
      </p>
      <div className="doctor-grid">
        {doctors.map((doctor, index) => (
          <DoctorCard key={index} {...doctor}
          
          />
        ))}
      </div>
    </div>
  );
}

export default DoctorListPage;
