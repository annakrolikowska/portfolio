import React from 'react';
import '../assets/styles/sections-styles/About.css';

const AboutMe: React.FC = () => {
  return (
    <section className="about container" id="about">
      <h2>About me</h2>
      <p>
        I've been learning frontend development for over 1.5 years now, and I've successfully completed an 8-month mentoring program that focused on JavaScript and React. My learning journey doesn't stop there though, as I'm constantly striving to stay updated with the best coding practices.
      </p>
      <p>
        When it comes to my frontend projects, I place a strong emphasis on the visual aspect. I rely on tools like Figma for UI design and have a keen eye for detail. I ensure that the designs I work with are flawlessly translated into code, achieving that pixel-perfect and responsive implementation.
      </p>
    </section>
  );
};

export default AboutMe;