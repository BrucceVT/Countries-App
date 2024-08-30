import { Outlet } from "react-router";
import { useTheme } from "../hooks/ThemeContext.tsx";
import Header from "./Header/Header.tsx";

const MainLayout = () => {
  const { theme } = useTheme();

  return (
    <main
      className={`grid w-full h-full font-nunito ${
        theme === "light" ? "light" : "dark"
      }`}
    >
      <Header />
      <div className="bg-[#FAFAFA] text-black h-full dark:bg-[#202D36] dark:text-white">
        <div className="min-h-[calc(100vh-5rem)] p-10">
          <Outlet />
        </div>
        {/* <footer>Soy un footer</footer> */}
      </div>
    </main>
  );
};

export default MainLayout;
