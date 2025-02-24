import React, { useState, useEffect } from "react";
import "../assets/styles/components-styles/Navigation.scss";
import Highlight from "./Highlight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

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
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    target: string,
  ) => {
    event.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
      setIsMobileMenuVisible(false);
    }
  };

  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  return (
    <nav
      className={`navigation ${isMobile ? "navigation--mobile" : ""} ${
        isOpen ? "navigation--open" : ""
      }`}
    >
      {isMobile ? (
        <div
          className={`navigation__hamburger ${
            isOpen ? "navigation__hamburger--open" : ""
          }`}
          onClick={handleHamburgerClick}
        >
          {isMobileMenuVisible ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
      ) : null}
      <ul
        className={`navigation__list ${isOpen ? "navigation__list--open" : ""}`}
      >
        {links.map((link, index) => (
          <li key={index} className="navigation__item">
            <a
              href={`#${link.target}`}
              className="navigation__link"
              onClick={(e) => handleClick(e, link.target)}
            >
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
