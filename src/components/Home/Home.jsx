import React from 'react';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <>
      {/* You can also add a Hero/Intro Section here if needed */}

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="work">
        <Work />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
