import React from 'react';
import { technologies, Technology } from '../data/technologies';
import '../assets/styles/sections-styles/Stack.css';
import wave from '../assets/images/wave.svg'

const Stack: React.FC = () => {
    
  return (
    <section className="stack" id="stack">
    <img className="stack__wave stack__wave--top" src={wave} alt="wave" />
    <div className="stack__container container">
        <h2>Languages and tools</h2>
        <ul className="stack__list">
            {technologies.map((tech: Technology, index: number) => (
            <li className="stack__item" key={index}>
                <img src={tech.icon} alt={tech.label} />
                <h4>{tech.label}</h4>
            </li>
            ))}
        </ul>
      </div>
      <img className="stack__wave stack__wave--bottom" src={wave} alt="wave" />
    </section>
  );
};

export default Stack;

