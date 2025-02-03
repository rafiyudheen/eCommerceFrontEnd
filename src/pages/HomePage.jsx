import React, { useEffect, useState } from "react";
import Card from "../components/product/Card";
import NavBar from "../components/other/NavBar";

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Default to OS preference
      setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      console.log("isDarkMode===>", prevMode);
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  return (
    <>
      <NavBar></NavBar>
      <input
        type="checkbox"
        value="synthwave"
        className="toggle theme-controller"
        onClick={toggleTheme}
      />
    </>
  );
};

export default HomePage;
