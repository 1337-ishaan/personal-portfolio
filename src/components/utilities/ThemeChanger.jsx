import React, { useState, useEffect } from "react";
import { isOpenContext } from "../utilities/Hamburger";

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
    <>
      <isOpenContext.Consumer>
        {(isOpen) =>
          isOpen && (
            <>
              {darkMode ? (
                <img
                  onClick={handleModeChange}
                  className="fa fa_darkmode darkmode_icon fa-sun-o"
                  aria-hidden="true"
                  src="https://www.svgrepo.com/show/295127/sun-summertime.svg"
                />
              ) : (
                <img
                  onClick={handleModeChange}
                  className="fa fa_lightmode darkmode_icon fa-moon-o"
                  aria-hidden="true"
                  src="https://www.svgrepo.com/show/7570/man-on-the-moon.svg"
                />
              )}
            </>
          )
        }
      </isOpenContext.Consumer>
    </>
  );
};

export default DarkModeToggle;
