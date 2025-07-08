import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Tilt from 'react-parallax-tilt'
import Profileimg from '../../assets/Profileimg.png'

const About = () => {
  return (
    <section
      id="about"
      className="py-4  lg:px-[10vw] font-sans  md:mt-10 lg:mt-15"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-start">
        {/* Left Side - Text Content */}
        <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Ashish Koushal
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight">
            <span className="text-white">I am a </span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={[
                  'MERN Stack Developer',
                  'Full Stack Developer',
                  'Frontend Developer',
                  'Software Developer',
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a passionate MERN stack developer with 6 months of hands-on experience as a MERN stack development intern, where I built full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I have developed RESTful APIs, designed responsive front-end interfaces, managed state using React hooks and context, and integrated backend services. I’m now seeking a full-time opportunity to apply my skills, grow professionally, and contribute to a collaborative and innovative development team.
          </p>

          <a
           aria-label="Donload CV as Pdf."
            href="https://drive.google.com/file/d/15dHETRMdrSz4LWgd9g9uw0cOzoX6vF4Z/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white text-lg mt-0 z-10 overflow-hidden shadow-xl transition-all duration-500 hover:scale-105"
          >
            <span className="absolute inset-0 rounded-full  bg-gradient-to-r from-[#8e2de2] via-[#a855f7] to-[#ff6ec4] opacity-70 blur-md group-hover:opacity-100 animate-pulse-slow z-[-2]" />
            <span className="absolute inset-0 rounded-full bg-[#090011]/50 backdrop-blur-md border border-white/10 z-[-1] group-hover:bg-[#8245ec]/30 transition-colors duration-300" />
            <span className="shimmer">DOWNLOAD CV</span>
          </a>
        </div>

        {/* Right Side - Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="relative animate-fade-in-up">
            <div className="absolute -inset-[14px] rounded-full border-4 border-purple-500 
                        animate-spin-slow opacity-50 blur-lg z-0"></div>

            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              scale={1.08}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[24rem] lg:h-[24rem] 
                    border-4 border-purple-700 rounded-full overflow-hidden 
                    shadow-[0_0_60px_rgba(130,69,236,0.6)] hover:shadow-[0_0_90px_rgba(255,105,180,0.8)] 
                    transition-all duration-500 floating z-10"
            >
              <img
                src={Profileimg}
                alt="Ashish Koushal"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 rounded-full border-4 border-purple-400 
                          animate-pulse opacity-40 pointer-events-none" />
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
