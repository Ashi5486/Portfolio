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
// import { ThemeProvider } from './context/ThemeContext';
import ScrollToTop from './components/ScrollTop';

// Component to handle layout and footer visibility
const AppWrapper = () => {
  const location = useLocation();

  return (
    <div className='bg-[#050414]'>
      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px, transparent_1px), linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]' />

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

        {/* ✅ Only show footer on home route */}
        {location.pathname === '/' && <Footer />}

        <ScrollToTop />
      </div>
    </div>
  );
};

const App = () => {
  return (
    // <ThemeProvider>
      <Router>
        <AppWrapper />
      </Router>
    // </ThemeProvider>
  );
};

export default App;
