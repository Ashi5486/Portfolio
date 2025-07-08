// import React from "react";
// import { SkillsInfo } from "../../constant";
// import Tilt from "react-parallax-tilt";

// const Skills = () => (
//   <section
//     id="skills"
//     className="py-12 px-[8vw] md:px-[6vw] lg:px-[15vw] font-sans bg-skills-gradient clip-path-custom"
//   >
//     {/* Section Title */}
//     <div className="text-center mb-4">
//       <h2 className="text-2xl sm:text-3xl font-bold text-white">SKILLS</h2>
//       <div className="w-20 h-1 bg-[#8245ec] mx-auto mt-1"></div>
//       <p className="text-gray-400 mt-2 text-base font-medium">
//         A collection of my technical skills and expertise honed through various projects and experiences
//       </p>
//     </div>

//     {/* Skill Categories */}
//     <div className="flex flex-wrap gap-1 lg:gap-4 py-6 justify-between">
//       {SkillsInfo.map((category) => {
//         const showPercentage = category.title !== "Tools";

//         return (
//           <div
//             key={category.title}
//             className="bg-gray-900 backdrop-blur-md px-5 sm:px-8 py-6 sm:py-5 mb-6 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_15px_1px_rgba(130,69,236,0.3)]"
//           >
//             <h3 className="text-xl sm:text-2xl font-semibold text-gray-400 mb-3 text-center">
//               {category.title}
//             </h3>

//             {/* Skill Items */}
//             <Tilt
//               tiltMaxAngleX={20}
//               tiltMaxAngleY={20}
//               perspective={1000}
//               scale={1.05}
//               transitionSpeed={1000}
//               gyroscope={true}
//             >
//               <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
//                 {category.skills.map((skill) => (
//                   <div
//                     key={skill.name}
//                     className="flex flex-col items-center justify-center bg-transparent border-2 border-gray-700 rounded-3xl py-3 px-2 text-center w-full"
//                   >
//                     <img
//                       src={skill.logo}
//                       alt={`${skill.name} logo`}
//                       className="w-6 h-6 sm:w-7 sm:h-7 mb-1"
//                     />
//                     <span className="text-xs sm:text-sm text-gray-300 font-medium mb-1 cursor-pointer">
//                       {skill.name}
//                     </span>
//                     {showPercentage && (
//                       <>
//                         <span className="text-[10px] sm:text-xs text-purple-400 font-semibold mb-1 cursor-pointer">
//                           {skill.percentage}%
//                         </span>
//                         <div className="w-full bg-gray-800 rounded-full h-1.5">
//                           <div
//                             className="bg-purple-500 h-1.5 rounded-full transition-all duration-500"
//                             style={{ width: `${skill.percentage}%` }}
//                           ></div>
//                         </div>
//                       </>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </Tilt>
//           </div>
//         );
//       })}
//     </div>
//   </section>
// );

// export default Skills;
import React from "react";
import { SkillsInfo } from "../../constant";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-10 px-4 sm:px-6 md:px-[6vw] lg:px-[15vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">SKILLS</h2>
      <div className="w-20 h-1 bg-[#8245ec] mx-auto mt-1"></div>
      <p className="text-gray-400 mt-3 text-sm sm:text-base font-medium">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-between gap-5 py-6">
      {SkillsInfo.map((category) => {
        const showPercentage = category.title !== "Tools";

        return (
          <div
            key={category.title}
            className="bg-gray-900 backdrop-blur-md px-5 sm:px-6 py-5 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_15px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-gray-400 mb-4 text-center">
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
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center bg-transparent border-2 border-gray-700 rounded-2xl py-3 px-2 text-center"
                  >
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-7 sm:h-7 mb-1 object-contain"
                    />
                    <span className="text-xs sm:text-sm text-gray-300 font-medium mb-1 text-wrap text-center">
                      {skill.name}
                    </span>
                    {showPercentage && (
                      <>
                        <span className="text-[10px] sm:text-xs text-purple-400 font-semibold mb-1">
                          {skill.percentage}%
                        </span>
                        <div className="w-full bg-gray-800 rounded-full h-1.5">
                          <div
                            className="bg-purple-500 h-1.5 rounded-full transition-all duration-500"
                            style={{ width: `${skill.percentage}%` }}
                          ></div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </Tilt>
          </div>
        );
      })}
    </div>
  </section>
);

export default Skills;

