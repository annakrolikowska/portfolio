import React, { useState } from 'react';
import '../assets/styles/components-styles/Navigation.css';
import Highlight from './Highlight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

interface Link {
  title: string;
  target: string;
}

const Navigation: React.FC = () => {
  const links: Link[] = [
    { title: 'About me', target: 'about' },
    { title: 'My Stack', target: 'stack' },
    { title: 'Projects', target: 'projects' },
    { title: 'Contact', target: 'contact' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, target: string) => {
    event.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); 
    }
  };

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navigation ${isOpen ? 'navigation--open' : ''}`}>
      <div className="navigation__hamburger" onClick={handleHamburgerClick}>
      <FontAwesomeIcon icon={faBars} />
      </div>
      <ul className={`navigation__list ${isOpen ? 'navigation__list--open' : ''}`}>
        {links.map((link, index) => (
          <li key={index} className="navigation__item">
            <a href={`#${link.target}`} className="navigation__link" onClick={(e) => handleClick(e, link.target)}>
              {link.title}
              <Highlight className="navigation__highlight" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;