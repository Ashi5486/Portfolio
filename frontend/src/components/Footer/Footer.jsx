import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-purple-400 to-indigo-800 text-white py-10 px-[10vw] relative overflow-hidden">
      {/* Animated divider */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 animate-pulse" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left z-10 relative">
        {/* Left - Logo or Name */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Ashish Koushal</h2>
          <p className="text-sm text-gray-300">
            Passionate MERN Stack Developer crafting intuitive digital experiences.
          </p>
        </div>

        {/* Center - Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-300">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "About", id: "about" },
              { name: "Skills", id: "skills" },
              { name: "Experience", id: "experience" },
              { name: "Projects", id: "projects" },
              { name: "Education", id: "education" },
            ].map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className="hover:text-purple-400 transition duration-200 text-sm"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right - Social Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-purple-300">Connect</h3>
          <div className="flex justify-center md:justify-start space-x-4 text-xl">
            {[
              { icon: <FaFacebook />, link: "https://facebook.com" },
              { icon: <FaTwitter />, link: "https://twitter.com" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/ashish-koushal-9738b5205/" },
              { icon: <FaInstagram />, link: "https://instagram.com" },
              { icon: <FaGithub />, link: "https://github.com/Ashi5486" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transform hover:scale-110 transition duration-200"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Ashish Koushal. Built with ❤️ using React & Tailwind CSS.
      </div>
    </footer>
  );
};

export default Footer;
