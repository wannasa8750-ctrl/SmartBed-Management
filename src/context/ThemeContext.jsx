// src/context/ThemeContext.jsx
// Global dark / light mode context — shared across all pages

import { createContext, useContext, useState } from "react";
const ThemeContext = createContext({ isDark: true, toggleTheme: () => { } });
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false); // default = dark (dashboard look)
  const toggleTheme = () => setIsDark((prev) => !prev);
  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
