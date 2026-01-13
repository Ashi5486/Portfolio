import React from "react";
import { SkillsInfo } from "../../constant";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const Skills = () => (
  <section
    id="skills"
    className="py-10 px-4 sm:px-6 md:px-[6vw] lg:px-[15vw] font-sans bg-skills-gradient clip-path-custom text-black dark:text-white transition-colors duration-300"
  >
    {/* Section Title */}
    <motion.div
      className="text-center mb-6"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold">SKILLS</h2>
      <div className="w-20 h-1 bg-[#8245ec] mx-auto mt-1"></div>
      <p className="text-gray-700 dark:text-gray-300 mt-3 text-sm sm:text-base font-medium">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </motion.div>

    {/* Skill Categories */}
    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-5 py-6">
      {SkillsInfo.map((category) => {
        const showPercentage = category.title !== "Tools";

        return (
          <motion.div
            key={category.title}
            className="bg-white dark:bg-gray-900 backdrop-blur-md px-5 sm:px-6 py-5 w-full sm:w-[48%] rounded-2xl border border-gray-300 dark:border-white shadow-[0_0_15px_1px_rgba(130,69,236,0.3)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4 text-center">
              {category.title}
            </h3>

            {/* Skill Items */}
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex flex-col items-center justify-center bg-transparent border-2 border-gray-300 dark:border-gray-700 rounded-2xl py-3 px-2 text-center"
                    variants={itemVariants}
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-7 sm:h-7 mb-1 object-contain"
                    />
                    <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-300 font-medium mb-1 text-wrap text-center">
                      {skill.name}
                    </span>
                    {showPercentage && (
                      <>
                        <span className="text-[10px] sm:text-xs text-purple-500 font-semibold mb-1">
                          {skill.percentage}%
                        </span>
                        <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1.5">
                          <div
                            className="bg-purple-500 h-1.5 rounded-full transition-all duration-500"
                            style={{ width: `${skill.percentage}%` }}
                          ></div>
                        </div>
                      </>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </Tilt>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default Skills;
