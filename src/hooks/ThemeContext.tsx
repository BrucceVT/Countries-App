import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeContextType, ThemeProviderProps, ThemeMode } from "../types.ts";

const ThemeContext = createContext<ThemeContextType>({
  theme: ThemeMode.Light,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return ThemeMode.Dark;
    } else {
      return ThemeMode.Light;
    }
  });

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = () => {
      setTheme(mediaQueryList.matches ? ThemeMode.Dark : ThemeMode.Light);
    };

    mediaQueryList.addEventListener("change", updateTheme);

    return () => {
      mediaQueryList.removeEventListener("change", updateTheme);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
