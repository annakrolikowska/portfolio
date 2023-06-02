import React from 'react';
import '../../assets/styles/components-styles/UI/Button.css';

type ButtonProps = {
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, disabled, className, children }) => {
    const buttonClass = className ? `button ${className}` : 'button';
  
    return (
      <button className={buttonClass} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
};
  
export default Button;