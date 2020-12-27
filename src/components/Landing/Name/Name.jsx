import React from "react";
import { isOpenContext } from "../../utilities/Hamburger";
import GoldLogo from "../../../assets/images/goldLogo.png";
const Name = () => {
  return (
    <isOpenContext.Consumer>
      {(isOpen) =>
        isOpen && (
          <div className="container__name">
            <img className="container__name_logo" src={GoldLogo} />
          </div>
        )
      }
    </isOpenContext.Consumer>
  );
};

export default Name;
