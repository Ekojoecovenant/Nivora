import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import {React}
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Purse from '../src/Purse'
import Login from './Registration/Login'
import SignUp from './Registration/SignUp'
import NivoraHomePage from './NivoraHomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<SignUp />} />
      <Route path='/Login' element={<Login />} />
      <Route path="/Purse" element={<Purse />}/>
      <Route path="/NivoraHomePage" element={<NivoraHomePage />}/>
    </Routes>
   </Router>
   {/* <SignUp/> */}
  {/* <Login/> */}
   {/* <Purse/> */}

   </>
  )
}

export default App
