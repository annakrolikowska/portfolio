import React, { useState, useEffect } from "react";
import "../assets/styles/components-styles/ThemeButtons.scss";

const themes = ["blue", "green", "orange"];

const ThemeButtons: React.FC = () => {
  const [theme, setTheme] = useState<string>(() => {
    return localStorage.getItem("theme") || "pink";
  });

  useEffect(() => {
    document.body.classList.remove(...themes.map((t) => `theme-${t}`));
    if (theme !== "pink") {
      document.body.classList.add(`theme-${theme}`);
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="theme">
      <button
        className="theme__button theme__button--pink"
        onClick={() => setTheme("pink")}
      ></button>
      {themes.map((color) => (
        <button
          key={color}
          className={`theme__button theme__button--${color}`}
          onClick={() => setTheme(color)}
        ></button>
      ))}
    </div>
  );
};

export default ThemeButtons;
