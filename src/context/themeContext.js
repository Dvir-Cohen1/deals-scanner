import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function useThemeContext() {
  return useContext(ThemeContext);
}

export function useThemeUpdateContext() {
  return useContext(ThemeUpdateContext);
}

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={darkMode}>
      <ThemeUpdateContext.Provider value={handleToggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
