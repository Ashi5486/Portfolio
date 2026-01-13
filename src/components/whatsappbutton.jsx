import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [showDot, setShowDot] = useState(true); // controls red dot visibility

  const phoneNumber = "919340965231";
  const message = "Hi Ashish! I found your portfolio and would like to connect.";
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
        setTimeout(() => setAnimateIn(true), 50);
      } else {
        setAnimateIn(false);
        setTimeout(() => setIsVisible(false), 300);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  const handleClick = () => {
    setShowDot(false); 
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      onClick={handleClick}
      className={`fixed bottom-24 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all transform z-50 hover:shadow-[0_0_15px_2px_rgba(37,211,102,0.6)] ${
        animateIn
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-5 scale-95"
      } duration-300`}
    >
      <div className="relative">
        <FaWhatsapp size={24} />

        {/* 🔴 Red dot only shows if showDot is true */}
        {showDot && (
          <>
            <span className="absolute -top-1.5 -right-1.5 block w-3 h-3 bg-red-500 rounded-full animate-ping" />
            <span className="absolute -top-1.5 -right-1.5 block w-3 h-3 bg-red-500 rounded-full" />
          </>
        )}
      </div>
    </a>
  );
};

export default WhatsAppButton;
