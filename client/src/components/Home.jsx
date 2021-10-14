import React, { useState } from 'react';
import NavBar from './NavBar.jsx';
import SideBar from './SideBar.jsx';
import HeroSection from './Hero';
import InfoSection from './InfoSection';
import { homeObjOne, homeObjTwo } from './InfoSection/Data.js';
import Services from './Services';
// import Footer from './Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      {/* <Services /> */}
      {/* <Footer /> */}
    </>
  )
}

export default Home;