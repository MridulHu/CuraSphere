import React from 'react';
import './PatientInfo.css'; 
import icon from '../assets/Report.webp'

function InfoGen() {
  return (
    <main className="PatientInfo-main">
        
        
        <section className='original-report'>
          <img src = {icon}  alt='original report'/>
        </section>

        <section className="summary-report">
          <h2 className='summary-heading'>Summary Report</h2>
          <p className='summary-desc'>
            According to the provided report the model has summarized that you might have that.
          </p>
        </section>
        <section className="root-cause-details">
          <h2 className='root-cause-heading'>Root Cause: </h2>
          
            <p className='root-cause-desc'>This<br />due to that</p>
          
          
        </section>

        <section className="advice">
          <h2 className='advice-heading'>Advice</h2>
          <textarea placeholder="Type your advice here..." className='advice-text'></textarea>
          <button className="send-button">Send</button>
        </section>
      </main>
  )
}

export default InfoGen