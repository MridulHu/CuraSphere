import { useState } from 'react'

import './App.css'
import {Route, BrowserRouter as Router,Routes} from 'react-router-dom';
import Navbar from './sections/NavBar/Navbar';
import Home from './sections/Home/Home';
import DoctorPage from './pages/DoctorPage';
import PatientPage from './pages/PatientSide/PatientPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='main'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path = '/patientPage' element = {<PatientPage/>}/>
          <Route path = '/doctorPage' element = {<DoctorPage/>}/>
          {/* <Route path = '/PatientInfo' element = {<PatientInfo/>}/> */}
        </Routes>
      </Router>
    </main>
  )
}

export default App
