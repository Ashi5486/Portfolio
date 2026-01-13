import React, { useEffect } from "react";
import {
  // FaFacebook,
  // FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  useEffect(() => {
    const updateTheme = () => {
      const theme = localStorage.getItem("theme") || "dark";
      document.documentElement.classList.toggle("dark", theme === "dark");
    };

    updateTheme();
    window.addEventListener("storage", updateTheme);
    return () => window.removeEventListener("storage", updateTheme);
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-20 px-[6vw] md:px-[7vw] lg:px-[15vw] 
        bg-gradient-to-r from-white via-purple-100 to-pink-100 
        text-black dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
        dark:text-gray-100 transition-colors duration-500"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4 tracking-wide bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
            Ashish Koushal
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-200">
            Passionate MERN Stack Developer crafting intuitive digital experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-indigo-300">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {["about", "skills", "experience", "work", "education", "contact"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleScroll(item)}
                  className="capitalize text-base hover:text-purple-600 dark:hover:text-indigo-400 transition-all"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-700 dark:text-indigo-300">
            Connect with Me
          </h3>
          <div className="flex gap-4 text-2xl">
            {[
             /* { icon: <FaFacebook />, url: "https://www.facebook.com/ashish.koushal.528/" },*/
              { icon: <FaLinkedin />, url: "https://linkedin.com/in/ashish-koushal-9738b5205" },
              { icon: <FaInstagram />, url: "https://www.instagram.com/mr_ashishkoushal1430/" },
              { icon: <FaGithub />, url: "https://github.com/Ashi5486" },
              {/* { icon: <FaTwitter />, url: "https://twitter.com" }, */}
            ].map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-500 dark:hover:text-indigo-400 transition-transform hover:scale-110"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-12 text-gray-500 dark:text-gray-300">
        © {new Date().getFullYear()} Ashish Koushal. Built with ❤️ using React & Tailwind CSS.
      </div>
    </motion.footer>
  );
};

export default Footer;
