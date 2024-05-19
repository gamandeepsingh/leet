import { ThemeProvider } from "@/Contexts/Theme";
import { useState, useEffect } from "react";
import DarkLight from "./DarkLight";
import logo from "../../assets/logo.png";
import Form from "../Dashboard/Form";
import LogoutBtn from "./LogoutBtn";
import LoginBtn from "./LoginBtn";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  // console.log(pathname)

  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem("themeMode") || "dark";
  });

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
    localStorage.setItem("themeMode", themeMode); // Store user's theme choice in local storage
  }, [themeMode]);

  const authStatus = useSelector((state) => state.auth.status);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="w-full flex sm:justify-between justify-between items-center px-4 py-4 left-0 right-0 top-0">
        <div className="flex sm:space-x-4 items-center">
        {authStatus && <Form />}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" className="w-8 h-8 sm:w-12 sm:h-12" />
          <h2 className="text-center scroll-m-20 border-b text-lg sm:text-4xl font-semibold tracking-tight">
            LeetStats
          </h2>
        </Link>
        </div>
        <div className="flex items-center space-x-1">
          <DarkLight />
          {authStatus && pathname != "/dashboard" && (
            <Link to="/dashboard">
              <Button
                variant=""
                className="text-xs p-1 sm:p-4 sm:text-base"
              >
                DashBoard
              </Button>
            </Link>
          )}
          {!authStatus && <LoginBtn />}
          {authStatus && <LogoutBtn />}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Navbar;
