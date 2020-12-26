import React from "react";
import { isOpenContext } from "../../utilities/Hamburger";

const Name = () => {
  return (
    <isOpenContext.Consumer>
      {(isOpen) => isOpen && <div className=" name__text">Ishaan Parmar</div>}
    </isOpenContext.Consumer>
  );
};

export default Name;
