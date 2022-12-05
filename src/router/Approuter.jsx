import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from '../components/Login';
import Navbar from "../components/Navbar"
import Register from '../components/Register';
import Hizmet from '../pages/Hizmet';
import Home from '../pages/Home';
import Return from '../pages/Return';
import Privaterouter from './Privaterouter';

const Approuter = () => {
  return (
     <BrowserRouter>
   
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path='' element={<Privaterouter />}  >
             <Route path="/hizmet" element={<Hizmet/>} />
             <Route path="/home" element={<Home />} />
             <Route path="/return" element={<Return/>} />
            
        </Route>
       
        <Route path="/register" element={<Register />} />
      
      
      
      </Routes>
    
     </BrowserRouter>
   
   
   
  )
}

export default Approuter