import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../constant";
import { containerVariants, fadeInUp } from "../../variants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef();

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [selectedProject]);

  useEffect(() => {
    const esc = (e) => e.key === "Escape" && setSelectedProject(null);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setSelectedProject(null);
    }
  };

  return (
    <section
      id="work"
      className="py-24 px-[6vw] md:px-[7vw] lg:px-[15vw] font-sans relative"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-black dark:text-white">PROJECTS</h2>
        <div className="w-48 h-1.5 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-700 dark:text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeInUp}
            onClick={() => setSelectedProject(project)}
            className="transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_25px_#8245ec80] border border-gray-300 dark:border-white bg-white dark:bg-gray-900 rounded-2xl shadow-xl cursor-pointer"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#f1edf9] dark:bg-[#251f38] text-xs font-semibold text-purple-600 dark:text-purple-500 rounded-full px-2 py-1 mr-2 mb-2 transition-transform hover:scale-110"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            onClick={handleClickOutside}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-black dark:text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>

              <div className="flex flex-col">
                <div className="w-full flex justify-center px-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full max-h-[400px] object-contain rounded-xl"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 mb-6 text-sm md:text-base text-center">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#f1edf9] dark:bg-[#251f38] text-xs font-semibold text-purple-600 dark:text-purple-400 rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-200 dark:bg-gray-800 hover:bg-purple-600 text-black dark:text-gray-300 py-2 rounded-xl text-center font-semibold text-sm sm:text-base transition-colors"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
