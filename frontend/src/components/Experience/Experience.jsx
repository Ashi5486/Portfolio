import React from "react";
import { experiences } from "../../constant";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[8vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-56 h-1 bg-purple-500 mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full z-0"></div>

        {/* Timeline Entries */}
        {experiences.map((experience, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={experience.id}
              className={`relative flex flex-col sm:flex-row ${
                isLeft ? "sm:justify-end" : "sm:justify-start"
              } items-center mb-20`}
            >
              {/* Timeline Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 sm:-translate-x-1/2 sm:translate-y-0 w-24 h-24 rounded-full bg-white border-4 border-purple-500 shadow-[0_0_20px_4px_rgba(130,69,236,0.5)] z-20 flex justify-center items-center overflow-hidden">
                <img
                  src={experience.img}
                  alt={experience.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Timeline Content Card */}
              <div
                className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl border border-white bg-gray-900 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] backdrop-blur-md transform transition-transform duration-300 hover:scale-105 z-10 ${
                  isLeft ? "sm:ml-0 sm:mr-12" : "sm:ml-12 sm:mr-0 sm:flex-row-reverse"
                } sm:mt-0 mt-20`}
              >
                <div className="flex items-center space-x-6">
                  {/* Company Image */}
                  <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {experience.company}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">{experience.date}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-gray-400">{experience.desc}</p>

                {/* Skills */}
                <div className="mt-4">
                  <h5 className="font-medium text-white">Skills:</h5>
                  <ul className="flex flex-wrap mt-2">
                    {experience.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
