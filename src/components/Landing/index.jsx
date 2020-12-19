import React from "react";
import Hamburger from "../utilities/Hamburger";
import Profession from "../Landing/Profession/Profession";
import DynamicText from "./DynamicText/DynamicText";
const index = () => {
  return (
    <>
      <div className="container__landing">
        <Profession />
        <DynamicText />
      </div>
    </>
  );
};
export default index;
