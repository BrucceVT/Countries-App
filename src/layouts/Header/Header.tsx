import React from "react";
import { useTheme } from "../../hooks/ThemeContext.tsx";
import { BsMoonFill, BsSunFill } from "react-icons/bs/index.js";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex justify-between items-center h-[5rem] p-8 shadow-md bg-white text-black z-10 dark:bg-[#2B3743] dark:text-white">
      <div className="text-xl font-bold">Where in the world?</div>
      <button
        className="flex items-center justify-center space-x-2"
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <>
            <BsSunFill />
            <p>Light Mode</p>
          </>
        ) : (
          <>
            <BsMoonFill />
            <p>Dark Mode</p>
          </>
        )}
      </button>
    </header>
  );
};

export default Header;
