import React from 'react';
import '../assets/styles/sections-styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Footer: React.FC = () => {
    return (
      <footer className="footer">
        <p className="footer__copyright">
          Designed and Coded by © 2023 Anna Królikowska. All rights reserved.
        </p>
        <div className="footer__icons-container">
          <a className="footer__icon" href="https://www.linkedin.com/in/krolikowska-ann/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon  icon={faLinkedin} />
          </a> 
          <a className="footer__icon" href="https://github.com/annakrolikowska" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;