import React from "react";
import { education } from "../../constant"; // your education array

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[6vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Header */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-56 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My academic journey has shaped who I am today.
        </p>
      </div>

      {/* Timeline Line */}
      <div className="relative">
        <div className="hidden sm:block absolute left-1/2 top-0 h-full w-[2px] bg-white/30 -translate-x-1/2 z-0" />

        {/* Timeline Items */}
        <div className="space-y-20 relative z-10">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`flex flex-col sm:flex-row items-center ${
                index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
              }`}
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
                className={`mt-16 sm:mt-0 w-full sm:w-[45%] p-6 rounded-2xl bg-gray-900/80 border border-purple-400/40 backdrop-blur-xl shadow-xl transition-transform duration-300 hover:scale-[1.03] ${
                  index % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"
                }`}
              >
                <h3 className="text-xl font-semibold text-white mb-1">
                  {edu.degree}
                </h3>
                <h4 className="text-sm text-gray-300">{edu.school}</h4>
                <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                <p className="mt-3 text-sm text-gray-400 font-semibold">
                  Grade: {edu.grade}
                </p>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {edu.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
