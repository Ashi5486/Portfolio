// import React, { useEffect, useState } from "react";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaLinkedin,
//   FaInstagram,
//   FaGithub,
//   FaMoon,
//   FaSun,
// } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../variants"; // Make sure this exists

// const Footer = () => {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const theme = localStorage.getItem("theme") || "dark";
//     setIsDark(theme === "dark");
//     document.documentElement.classList.toggle("dark", theme === "dark");
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = isDark ? "light" : "dark";
//     setIsDark(!isDark);
//     localStorage.setItem("theme", newTheme);
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//   };

//   const handleScroll = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <motion.footer
//       className={`${
//         isDark
//           ? "bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]"
//           : "bg-gradient-to-r from-purple-300 via-indigo-300 to-pink-200"
//       } ${isDark ? "text-white" : "text-black"} py-12 px-[10vw] relative overflow-hidden`}
//       variants={fadeIn("up", 0.1)}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true }}
//     >
//       {/* Pulse Line */}
//       <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 animate-pulse" />

//       <div className="grid grid-cols-1 md:grid-cols-4 gap-10 z-10 relative">
//         {/* 1. Brand Info */}
//         <div>
//           <h2 className="text-2xl font-bold mb-2">Ashish Koushal</h2>
//           <p className="text-sm text-gray-300 dark:text-gray-400">
//             Passionate MERN Stack Developer crafting intuitive digital experiences.
//           </p>
//         </div>

//         {/* 2. Quick Links */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4 text-purple-200 dark:text-purple-300">
//             Quick Links
//           </h3>
//           <ul className="space-y-2 text-sm">
//             {["about", "skills", "experience", "work", "education", "contact"].map((item) => (
//               <li key={item}>
//                 <button
//                   onClick={() => handleScroll(item)}
//                   className="hover:text-purple-300 capitalize transition-all duration-200"
//                 >
//                   {item}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* 3. Newsletter */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4 text-purple-200 dark:text-purple-300">
//             Newsletter
//           </h3>
//           <p className="text-sm text-gray-300 dark:text-gray-400 mb-2">
//             Get updates and tech insights.
//           </p>
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               alert("Thanks for subscribing!");
//               e.target.reset();
//             }}
//             className="flex flex-col space-y-2"
//           >
//             <input
//               type="email"
//               placeholder="Your email"
//               required
//               className="px-3 py-2 rounded-md text-black text-sm focus:outline-none focus:ring-2 ring-purple-400"
//             />
//             <button
//               type="submit"
//               className="bg-purple-600 hover:bg-purple-700 text-white text-sm py-2 rounded-md transition"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>

//         {/* 4. Social + Theme */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4 text-purple-200 dark:text-purple-300">
//             Connect with Me
//           </h3>
//           <div className="flex space-x-4 mb-4 text-xl">
//             {[
//               { icon: <FaFacebook />, url: "https://facebook.com" },
//               { icon: <FaTwitter />, url: "https://twitter.com" },
//               { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/ashish-koushal-9738b5205/" },
//               { icon: <FaInstagram />, url: "https://instagram.com" },
//               { icon: <FaGithub />, url: "https://github.com/Ashi5486" },
//             ].map((item, index) => (
//               <a
//                 key={index}
//                 href={item.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-purple-200 hover:scale-110 transition-transform"
//               >
//                 {item.icon}
//               </a>
//             ))}
//           </div>
//           <button
//             onClick={toggleTheme}
//             className="flex items-center gap-2 bg-white dark:bg-gray-800 px-3 py-2 rounded-md text-sm font-medium text-black dark:text-white hover:scale-105 transition"
//           >
//             {isDark ? (
//               <>
//                 <FaSun className="text-yellow-400" /> Light Mode
//               </>
//             ) : (
//               <>
//                 <FaMoon className="text-purple-600" /> Dark Mode
//               </>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Footer Bottom */}
//       <div className="mt-10 text-center text-sm text-gray-300 dark:text-gray-400">
//         © {new Date().getFullYear()} Ashish Koushal. Built with ❤️ using React & Tailwind CSS.
//       </div>
//     </motion.footer>
//   );
// };

// export default Footer;
import React, { useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
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
              { icon: <FaFacebook />, url: "https://facebook.com" },
              { icon: <FaTwitter />, url: "https://twitter.com" },
              { icon: <FaLinkedin />, url: "https://linkedin.com/in/ashish-koushal-9738b5205" },
              { icon: <FaInstagram />, url: "https://www.instagram.com/mr_ashishkoushal1430/" },
              { icon: <FaGithub />, url: "https://github.com/Ashi5486" },
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
