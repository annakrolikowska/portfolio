import React from "react";
import "../assets/styles/components-styles/Button.scss";

type ButtonProps = {
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  className,
  href,
  onClick,
  disabled,
  children,
}) => {
  const buttonClass = className ? `button ${className}` : "button";

  if (href) {
    return (
      <a href={href} className={buttonClass}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
