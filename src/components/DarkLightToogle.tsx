import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../assets/styles/components-styles/DarkLightToggle.scss";

interface DarkLightToggleProps {
  small?: boolean;
}

const DarkLightToggle: React.FC<DarkLightToggleProps> = ({ small }) => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;
  const { theme, toggleTheme } = themeContext;

  return (
    <button
      onClick={toggleTheme}
      className={`toggleButton ${small ? "small" : ""}`}
    >
      {theme === "light" ? "🌙" : "☀️"}
      {!small && (theme === "light" ? " Dark Mode" : " Light Mode")}
    </button>
  );
};

export default DarkLightToggle;
