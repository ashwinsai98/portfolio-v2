import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Certifications from './Components/Certifications/Certifications';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Modal from "./Components/Modal";
import Timeline from './Components/Timeline/Timeline';

const App = () => {
  const [moadalData, setModalData] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal modalData={moadalData} handleClose={handleClose} show={show} />
      <Navbar/>
      <Hero/>
      <About/>
      <Timeline />
      <Services setModalData={setModalData} handleShow={handleShow} />
      <Certifications />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
