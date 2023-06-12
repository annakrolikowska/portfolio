import React from 'react';
import '../assets/styles/sections-styles/Header.css';
import Button from '../components/Button';
import avatar from '../assets/images/avatar.png'
import Navigation from '../components/Navigation';

const Header: React.FC = () => {
  return (
    <header className="header container" id="home">
        <Navigation/>
        <div className="header__text-container">
            <h1>Hello,<br/> I’m Anna, and I’m Junior <span>Frontend&nbsp;Developer</span></h1>
            <div className="header__img-container header__img-container--mobile">
            <img className="header__img" src={avatar} alt="avatar" />
        </div>
            <p>I am actively seeking new opportunities in the frontend development field.</p>
            <Button href="#projects">Checkout my projects</Button>
        </div>
        <div className="header__img-container header__img-container--desktop">
            <img className="header__img" src={avatar} alt="avatar" />
        </div>
    </header>
  );
};

export default Header;