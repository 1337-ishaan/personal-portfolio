import React, { useState, useEffect } from "react";
import { Slant } from "hamburger-react";
import HamburgerContents from "./HamburgerContents";
import Name from "../Landing/Name/Name";
import { scrollColor } from "../../containers/App.js";
export const isOpenContext = React.createContext(false);

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    scrollColor([30, 30, 30], ".container__hamburger");
    if (isOpen) {
      document.querySelector(".container__hamburger").style.background = "rgb(0,0,0)";
    }
  }, [isOpen]);
  return (
    <div className="container__hamburger">
      <Slant
        size={18}
        className="hamburger__icon"
        toggled={isOpen}
        toggle={setIsOpen}
      />
      {isOpen && (
        <>
          <HamburgerContents />
        </>
      )}
      <isOpenContext.Provider value={!isOpen}>
        <Name />
      </isOpenContext.Provider>
    </div>
  );
};

export default Hamburger;
