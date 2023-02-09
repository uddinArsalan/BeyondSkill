import Navbar from './components/Navbar'
import MainSection from './components/MainSection'
import HeroSection from './components/HeroSection'
import Sponsor from "./components/Sponsor"
import Contact from './components/Contact'
import Footer from './components/Footer'
// import { useState } from 'react';
import Menu from './components/Menu'

function Homepage({menu ,setMenu}) {
   
    return (
        <>
        <Navbar menu={menu} setMenu={setMenu}/>
        {
     <>
        {menu && <Menu />}
        <MainSection/>
        <HeroSection />
        <Sponsor />
        <Contact />
        <Footer />
        </>
        }
        </>
    )
  }
  
  export default Homepage
  