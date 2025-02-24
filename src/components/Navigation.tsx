import React, { useState, useEffect, useRef } from "react";
import "../assets/styles/components-styles/Navigation.scss";
import Highlight from "./Highlight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import DarkLightToggle from "./DarkLightToogle";

interface Link {
  title: string;
  target: string;
}

const Navigation: React.FC = () => {
  const links: Link[] = [
    { title: "About me", target: "about" },
    { title: "My Stack", target: "stack" },
    { title: "Projects", target: "projects" },
    { title: "Contact", target: "contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      ref={navRef}
      className={`navigation ${isMobile ? "navigation--mobile" : ""} ${
        isOpen ? "navigation--open" : ""
      }`}
    >
      {isMobile && (
        <div
          className={`navigation__hamburger ${
            isOpen ? "navigation__hamburger--open" : ""
          }`}
          onClick={handleHamburgerClick}
        >
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </div>
      )}
      <ul
        className={`navigation__list ${isOpen ? "navigation__list--open" : ""}`}
      >
        {links.map((link, index) => (
          <li key={index} className="navigation__item">
            <a href={`#${link.target}`} className="navigation__link">
              {link.title}
              <Highlight className="navigation__highlight" />
            </a>
          </li>
        ))}
        <DarkLightToggle />
      </ul>
    </nav>
  );
};

export default Navigation;
