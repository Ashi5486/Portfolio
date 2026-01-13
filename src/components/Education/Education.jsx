import React from "react";
import { motion } from "framer-motion";
import { education } from "../../constant";
import { fadeIn } from "../../variants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[6vw] font-sans bg-skills-gradient clip-path-custom-3 text-black dark:text-white transition-colors duration-300"
    >
      {/* Section Header */}
      <motion.div
        className="text-center mb-20"
        variants={fadeIn("up", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold">EDUCATION</h2>
        <div className="w-56 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg font-semibold">
          My academic journey has shaped who I am today.
        </p>
      </motion.div>

      {/* Timeline Line */}
      <div className="relative">
        <div className="hidden sm:block absolute left-1/2 top-0 h-full w-[6px] bg-purple-400 dark:bg-purple-500 -translate-x-1/2 z-0 rounded-full shadow-[0_0_15px_rgba(130,69,236,0.5)]" />

        {/* Timeline Items */}
        <div className="space-y-20 relative z-10">
          {education.map((edu, index) => {
            const direction = index % 2 === 0 ? "left" : "right";

            return (
              <motion.div
                key={edu.id}
                className={`flex flex-col sm:flex-row items-center ${
                  index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
                }`}
                variants={fadeIn(direction, index * 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                {/* Logo Bubble */}
                <div className="absolute left-1/2 transform -translate-x-1/2 sm:-translate-x-1/2 sm:translate-y-0 w-24 h-24 rounded-full bg-white border-4 border-purple-500 shadow-[0_0_20px_4px_rgba(130,69,236,0.5)] z-20 flex justify-center items-center overflow-hidden">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Card */}
                <div
                  className={`mt-16 sm:mt-0 w-full sm:w-[45%] p-6 rounded-2xl border border-purple-400/40 backdrop-blur-xl shadow-xl transition-transform duration-300 hover:scale-[1.03] ${
                    index % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"
                  } bg-white dark:bg-gray-900/80`}
                >
                  <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                  <h4 className="text-sm text-gray-700 dark:text-gray-300">{edu.school}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{edu.date}</p>
                  <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 font-semibold">
                    Grade: {edu.grade}
                  </p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {edu.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
