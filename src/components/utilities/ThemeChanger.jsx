import React, { useState, useEffect } from "react";
import {isOpenContext} from '../utilities/Hamburger'

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("DARK_MODE"))
  );

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("DARK_MODE")) === true) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const handleModeChange = () => {
    if (!darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
	}
	
	setDarkMode(!darkMode);
    localStorage.setItem("DARK_MODE", !darkMode);
  };

  return (
	<isOpenContext.Consumer>
	{(isOpen) => isOpen && <button onClick={handleModeChange}>Change Mode</button>}
  </isOpenContext.Consumer>
)};

export default DarkModeToggle;
