import React, { useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Menu, Sidebar } from "semantic-ui-react";
import { Slant } from "hamburger-react";
import HamburgerContents from "./HamburgerContents";
import Name from "../Landing/Name/Name";
export const isOpenContext = React.createContext(false);

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container__hamburger">
      <Slant size={14} className="hamburger__icon" toggled={isOpen} toggle={setIsOpen} />
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
