import React from "react";
import "../assets/styles/components-styles/LinkButton.scss";

type LinkButtonProps = {
  className?: string;
  children: React.ReactNode;
  href: string;
};

const LinkButton: React.FC<LinkButtonProps> = ({
  className,
  children,
  href,
}) => {
  const linkClass = className ? `link ${className}` : "link";

  return (
    <a
      className={linkClass}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default LinkButton;
