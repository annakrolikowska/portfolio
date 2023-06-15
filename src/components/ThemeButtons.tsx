import React, { useState } from 'react';
import '../assets/styles/components-styles/ThemeButtons.css';

const ThemeButtons: React.FC = () => {
  const [theme, setTheme] = useState<string>('pink');

  const handleButtonClick = (color: string) => {
    setTheme(color);
  };

  let primaryColor = '';
  let primaryColorLight = '';
  let primaryColorDark = '';

  switch (theme) {
    case 'pink':
      primaryColor = '#E9BCD9';
      primaryColorLight = '#FBE5F3';
      primaryColorDark = '#D793BE';
      break;
    case 'blue':
      primaryColor = '#A7C7E7';
      primaryColorLight = '#CADDF1';
      primaryColorDark = '#8AA9C9';
      break;
    case 'green':
      primaryColor = '#A9D099';
      primaryColorLight = '#CBE3C2';
      primaryColorDark = '#8DAF7F';
      break;
    case 'orange':
      primaryColor = '#FFD88C';
      primaryColorLight = '#FFE8BA';
      primaryColorDark = '#E0BA70';
      break;
    default:
      break;
  }

  return (
    <div className="theme">
      <button className="theme__button theme__button--pink" onClick={() => handleButtonClick('pink')}></button>
      <button className="theme__button theme__button--blue" onClick={() => handleButtonClick('blue')}></button>
      <button className="theme__button theme__button--green" onClick={() => handleButtonClick('green')}></button>
      <button className="theme__button theme__button--orange" onClick={() => handleButtonClick('orange')}></button>
      
      <style>
        {`
          :root {
            --color-primary: ${primaryColor};
            --color-primary-light: ${primaryColorLight};
            --color-primary-dark: ${primaryColorDark};
          }
        `}
      </style>
    </div>
  );
};

export default ThemeButtons;