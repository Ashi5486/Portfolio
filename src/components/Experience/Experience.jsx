import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../../constant";
import { fadeIn } from "../../variants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[8vw] font-sans bg-skills-gradient clip-path-custom-3 text-black dark:text-white transition-colors duration-300"
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold">EXPERIENCE</h2>
        <div className="w-56 h-1 bg-purple-500 mx-auto mt-2"></div>
        <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in various organizations.
        </p>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-[6px] bg-purple-400 dark:bg-purple-500 h-full z-0 rounded-full shadow-[0_0_15px_rgba(130,69,236,0.5)]" />

        {/* Timeline Entries */}
        {experiences.map((experience, index) => {
          const isLeft = index % 2 === 0;
          const direction = isLeft ? "left" : "right";

          return (
            <motion.div
              key={experience.id}
              className={`relative flex flex-col sm:flex-row items-center mb-20 ${
                isLeft ? "sm:justify-end" : "sm:justify-start"
              }`}
              variants={fadeIn(direction, index * 0.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Timeline Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 sm:-translate-x-1/2 w-24 h-24 rounded-full bg-white border-4 border-purple-500 shadow-[0_0_20px_4px_rgba(130,69,236,0.5)] z-20 flex justify-center items-center overflow-hidden">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Timeline Content Card */}
              <div
                className={`w-full sm:max-w-md p-6 sm:p-8 rounded-2xl border border-purple-400/40 backdrop-blur-md shadow-xl transform transition-transform duration-300 hover:scale-[1.03] z-10 bg-white dark:bg-gray-900/80 ${
                  isLeft ? "sm:mr-12" : "sm:ml-12 sm:flex-row-reverse"
                } sm:mt-0 mt-20`}
              >
                {/* Header Row */}
                <div className="flex items-center space-x-6">
                  {/* Company Logo */}
                  <div className="w-16 h-16 bg-white rounded-md overflow-hidden border border-purple-400 shadow-md">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title Info */}
                  <div className="flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-semibold">
                      {experience.role}
                    </h3>
                    <h4 className="text-md text-gray-700 dark:text-gray-300">
                      {experience.company}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {experience.date}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {experience.desc}
                </p>

                {/* Skills */}
                <div className="mt-4">
                  <h5 className="font-medium">Skills:</h5>
                  <ul className="flex flex-wrap mt-2">
                    {experience.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-[#8245ec] text-white px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-white/40"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
