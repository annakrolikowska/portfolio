import React from 'react';
import '../assets/styles/sections-styles/Header.css';
import Button from '../components/Button';
import avatar from '../assets/images/avatar.png'
import Navigation from '../components/Navigation';

const Header: React.FC = () => {
  return (
    <section className="header" id="home">
        <Navigation/>
        <div className="header__text-container">
        <h1>Hello, I’m Anna, and I’m Junior <span>Frontend&nbsp;Developer</span></h1>
        <p>I am actively seeking new opportunities in the frontend development field.</p>
        <Button>Checkout my projects</Button>
        </div>
        <div className="header__img-container">
            <img className="header__img" src={avatar} alt="avatar" />
        </div>
    </section>
  );
};

export default Header;