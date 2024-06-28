
import './App.css';
import React from 'react';
import Header from "./component/Header.jsx"
import Navbar from "./component/Navbar.jsx"
import Hero from "./component/Hero.jsx"
import Subhero from "./component/Subhero.jsx"
import Aboutjob from "./component/Aboutjob.jsx"
import Footer from "./component/Footer.jsx"
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    
    <div>
        <Header/>
        <Navbar/>
        <Hero/>
        <div className='border-[1px] border-[#E7E7E7] '>
        <Subhero/>
        <Aboutjob/>
        </div>
        <div className='my-6'>
        <Footer/>
        </div>
    </div>
  );
}

export default App;
