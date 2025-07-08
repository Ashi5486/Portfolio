import React, { useState, useEffect, useRef } from "react";
import { projects } from "../../constant";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef();

  // Scroll lock
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  // ESC key to close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Click outside to close
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
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-48 h-1.5 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          onClick={handleClickOutside}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 animate-fadeIn overflow-y-auto"
        >
          <div
            ref={modalRef}
            className="bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl relative transform scale-100 transition-all duration-300 animate-zoomIn"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-purple-500 z-50"
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="flex flex-col">
              <div className="w-full flex justify-center px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-[400px] object-contain rounded-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm md:text-base text-center">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-3 py-1"
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
                    className="flex-1 bg-gray-800 hover:bg-purple-800 text-gray-300 py-2 rounded-xl text-center font-semibold text-sm sm:text-base"
                  >
                    View Code
                  </a>
                  {/* <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-800 text-white py-2 rounded-xl text-center font-semibold text-sm sm:text-base"
                  >
                    View Live
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
