import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import BlurBlob from './BlurBlob';
import ScrollToTop from './components/ScrollTop';
import WhatsappButton from './components/whatsappbutton'
const AppWrapper = () => {
  const location = useLocation();

  return (
    <div className='bg-white dark:bg-[#050414] text-black dark:text-white transition-colors duration-300'>
      {/* Blurred Background Blob */}
      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

      {/* Background Grid Pattern */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] pointer-events-none' />

      <div className='relative pt-20'>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Only show footer on Home route */}
        {location.pathname === '/' && <Footer />}

        <ScrollToTop />
        <WhatsappButton/>
      </div>
    </div>
  );
};

const App = () => {
  return (
    // <Router>
      <AppWrapper />
    // </Router>
  );
};

export default App;
