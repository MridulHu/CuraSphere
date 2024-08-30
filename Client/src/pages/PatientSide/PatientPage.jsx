import React from 'react'
import DoctorListPage from './Doctor/DoctorListPage'

function PatientPage() {
  return (
  <>
    <section className='search-Section'>
        <div>
            <img src='' alt=''/>
            <input type = 'search' placeholder='Search for doctors....'/>
        </div>
    </section>

    <section className='doctor-list'>
        <DoctorListPage/>
    </section>
  </>
  )
}

export default PatientPage