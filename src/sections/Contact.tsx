import React from 'react';
import '../assets/styles/sections-styles/Contact.css';
import { ReactComponent as WaveSVG } from '../assets/images/wave.svg';


const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
         <WaveSVG className="contact__wave"/>
        <div className="contact__container"> 
            <h2>Feel free to contact me:</h2>
            <p>krolikowska.ann@gmail.com</p>
        </div>
    </section>
  );
};

export default Contact;