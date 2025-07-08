import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { FiMenu, FiX, } from "react-icons/fi";
// import { ThemeContext } from '../../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  // Scroll behavior for navbar blur effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { id: "", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 px-[7vw] lg:px-[12vw] py-4 transition duration-300 ${
      isScrolled ? "bg-[#050414] bg-opacity-60 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>

      <div className="flex justify-between items-center text-white">

        {/* Logo */}
        <div className="group text-lg sm:text-xl font-bold flex items-center gap-2 cursor-pointer">
          <FaCode className="text-[#8245ec] text-2xl group-hover:text-pink-500 transition" />
          <span className="bg-gradient-to-r from-[#8245ec] via-pink-400 to-[#8245ec] text-transparent bg-clip-text">
            Ashish
          </span>
          <span className="text-white group-hover:text-pink-200">Koushal</span>
          <FaCode className="text-[#8245ec] text-2xl group-hover:text-pink-500 transition" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                to={`/${item.id}`}
                className={`hover:text-[#8245ec] transition-all duration-200 ${
                  location.pathname === `/${item.id}` || (item.id === "" && location.pathname === "/")
                    ? "text-[#8245ec]"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Social + Theme (Desktop) */}
        <div className="hidden md:flex items-center gap-5">
          <a href="https://github.com/Ashi5486" target="_blank" rel="noopener noreferrer" className="hover:text-[#8245ec]">
            <FaGithub size={26} />
          </a>
          <a href="https://www.linkedin.com/in/ashish-koushal-9738b5205/" target="_blank" rel="noopener noreferrer" className="hover:text-[#8245ec]">
            <FaLinkedin size={26} />
          </a>
          {/* <button onClick={toggleTheme} className="text-xl hover:text-[#8245ec]">
            {theme === 'light' ? <FiMoon /> : <FiSun />}
          </button> */}
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
      {isOpen && (
        <div className="fixed top-16 left-0 w-full h-[calc(100vh-64px)] bg-[#050414]/95 backdrop-blur-md z-40 md:hidden">
          <ul className="flex flex-col items-center pt-8 space-y-6 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg hover:text-white ${
                    location.pathname === `/${item.id}` || (item.id === "" && location.pathname === "/")
                      ? "text-[#8245ec]"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Mobile Social + Theme */}
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/Ashi5486" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8245ec]">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/ashish-koushal-9738b5205/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#8245ec]">
                <FaLinkedin size={22} />
              </a>
            </div>

            {/* <button onClick={toggleTheme} className="text-2xl text-gray-300 hover:text-white mt-4">
              {theme === 'light' ? <FiMoon /> : <FiSun />}
            </button> */}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
