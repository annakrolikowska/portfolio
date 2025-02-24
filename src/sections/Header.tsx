import React from "react";
import "../assets/styles/sections-styles/Header.scss";
import Button from "../components/Button";
import avatar from "../assets/images/avatar.png";

import { ReactComponent as BackgroundSVG } from "../assets/images/img-background.svg";

const Header: React.FC = () => {
  return (
    <header className="header container fade-in" id="home">
      {/*  */}
      <div className="header__text-container fade-in">
        <h1>
          Hello,
          <br /> I’m Anna, and I’m <span>Frontend&nbsp;Developer</span>
        </h1>
        <div className="header__img-container header__img-container--mobile">
          <BackgroundSVG className="header__img-background" />
          <img className="header__img" src={avatar} alt="avatar" />
        </div>
        <p>
          I am actively seeking new opportunities in the frontend development
          field, focusing on Angular or React
        </p>
        <Button href="#projects">Check out my projects</Button>
      </div>
      <div className="header__img-container header__img-container--desktop ">
        <BackgroundSVG className="header__img-background" />
        <img className="header__img" src={avatar} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
