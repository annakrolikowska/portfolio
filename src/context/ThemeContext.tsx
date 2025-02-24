import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "light" | "dark";

const LIGHT_THEME: Theme = "light";
const DARK_THEME: Theme = "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const storedTheme = localStorage.getItem("theme-mode");
      return storedTheme === DARK_THEME ? DARK_THEME : LIGHT_THEME;
    } catch (error) {
      console.error("Error accessing localStorage:", error);
      return LIGHT_THEME;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("theme-mode", theme);
      document.documentElement.setAttribute("data-theme", theme);
    } catch (error) {
      console.error("Error setting localStorage:", error);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === LIGHT_THEME ? DARK_THEME : LIGHT_THEME));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
