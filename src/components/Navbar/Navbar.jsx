import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/experience', label: 'Experience' },
    { path: '/work', label: 'Projects' },
    { path: '/education', label: 'Education' },
    { path: '/contact', label: 'Contact' },
  ];

  // Hide navbar on scroll down
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-[7vw] lg:px-[12vw] py-4 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'bg-white dark:bg-[#050414] backdrop-blur-md shadow-md' : 'bg-transparent'}`}
    >
      <div className="flex  justify-between  mr-8 items-center text-black dark:text-white">
        {/* Logo */}
        <div className="group text-lg mr-2 sm:text-xl font-bold flex items-center gap-2 cursor-pointer">
          <FaCode className="text-[#8245ec] text-2xl group-hover:text-pink-500 transition" />
          <span className="bg-gradient-to-r from-[#8245ec] via-pink-400 to-[#8245ec] text-transparent bg-clip-text">
            Ashish
          </span>
          <span className="group-hover:text-pink-200">Koushal</span>
          <FaCode className="text-[#8245ec] text-2xl group-hover:text-pink-500 transition" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-700 dark:text-gray-300">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`hover:text-[#8245ec] transition-all duration-200 ${
                  location.pathname === item.path ? 'text-[#8245ec]' : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Socials + Theme */}
        <div className="hidden md:flex items-center ml-16 gap-5 text-gray-600 dark:text-gray-300">
          <a href="https://github.com/Ashi5486" target="_blank" rel="noreferrer" className="hover:text-[#8245ec]">
            <FaGithub size={28} />
          </a>
          <a href="https://www.linkedin.com/in/ashish-koushal-9738b5205/" target="_blank" rel="noreferrer" className="hover:text-[#8245ec]">
            <FaLinkedin size={28} />
          </a>
          <button onClick={toggleTheme} className="text-2xl ml-8 hover:text-[#8245ec]">
            {theme === 'light' ? <FiMoon className="text-3xl" /> : <FiSun className="text-3xl" />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX className="text-3xl text-[#8245ec]" onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu className="text-3xl text-[#8245ec]" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 w-full h-[calc(100vh-64px)] bg-white dark:bg-[#050414] z-40 md:hidden"
          >
            <ul className="flex flex-col items-center pt-8 space-y-6 text-gray-700 dark:text-gray-300">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="text-lg hover:text-[#8245ec]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              {/* Mobile Socials */}
              <div className="flex space-x-4 mt-6">
                <a href="https://github.com/Ashi5486" target="_blank" rel="noreferrer" className="hover:text-[#8245ec]">
                  <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/ashish-koushal-9738b5205/" target="_blank" rel="noreferrer" className="hover:text-[#8245ec]">
                  <FaLinkedin size={24} />
                </a>
              </div>

              {/* Mobile Theme Toggle */}
              <button onClick={toggleTheme} className="text-2xl mt-4 hover:text-[#8245ec]">
                {theme === 'light' ? <FiMoon /> : <FiSun />}
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
