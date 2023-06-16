import React, { useState, useEffect }  from 'react';
import '../assets/styles/sections-styles/About.css';
import { RoughNotation, RoughNotationGroup} from "react-rough-notation";

const AboutMe: React.FC = () => {

  const [showAnnotation, setShowAnnotation] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAnnotation((prevShow) => !prevShow);
    }, showAnnotation ? 10500 : 3000); 

    return () => clearInterval(interval);
  }, [showAnnotation]);



  return (
    <section className="about container fade-in" id="about">
      <h2>About me</h2>
      <RoughNotationGroup show={showAnnotation}>
        <p>
          I've been learning frontend development for over 1.5 years now, and I've successfully completed an 8-month{' '}
          <RoughNotation type="highlight" order="1" color="var(--color-primary)" iterations={1} multiline={true}>
            mentoring program
          </RoughNotation>{' '}
          that focused on{' '}
          <RoughNotation type="highlight" order="2" color="var(--color-primary)" animationDuration={1000} multiline={true}>
            JavaScript and React.
          </RoughNotation>{' '}
          My learning journey doesn't stop there though, as I'm constantly striving to stay updated with{' '}
          <RoughNotation type="underline" order="3"animationDuration={1000} multiline={true}>
            the best coding practices.
          </RoughNotation>
        </p>

        <p>
          When it comes to my frontend projects, I place a strong emphasis on the visual aspect. I rely on tools like{' '}
          <RoughNotation type="highlight" color="var(--color-primary)" order="3" iterations={1} animationDuration={900} multiline={true}>
            Figma for UI design
          </RoughNotation>{' '}
          and have{' '}
          <RoughNotation type="highlight" order="4" color="var(--color-primary)" multiline={true}>
            a keen eye for detail.
          </RoughNotation>{' '}
          I ensure that the designs I work with are flawlessly translated into code, achieving that{' '}
          <RoughNotation type="underline" order="5" animationDuration={1000} multiline={true}>
            pixel-perfect and responsive implementation.
          </RoughNotation>
        </p>
      </RoughNotationGroup>
    </section>

  );
};

export default AboutMe;