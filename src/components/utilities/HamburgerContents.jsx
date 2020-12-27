import React, {useEffect} from "react";
import {isOpenContext} from '../utilities/Hamburger';

const HamburgerContents = (props) => {
  return (
    <div className="u-center-content container__hamburger_content">
      <a className="container__hamburger_content_main" href="#">
        <div className="container__hamburger_content_main_heading">
          Overview
        </div>
        <div className="container__hamburger_content_main_paragraph">
          Welcome to my portfolio! Take a look at my work overview. Start here
          and discover more.
        </div>
      </a>
      <div className="u-vertical-divider"></div>
      <a  className="container__hamburger_content_main" href="#works">
        <div  className="container__hamburger_content_main_heading">Works</div>
        <div className="container__hamburger_content_main_paragraph">
          What have I been doing, all this time?
        </div>
      </a>
      <a className="container__hamburger_content_main" href="#inspiration">
        <div className="container__hamburger_content_main_heading">
          Inspiration
        </div>
        <div className="container__hamburger_content_main_paragraph">
          What keeps me up at 2 AM? Discover the people and brands that inspire
          me the most.
        </div>
      </a>
      <a className="container__hamburger_content_main" href="#aboutandcontact">
        <div className="container__hamburger_content_main_heading">
          About & Contact
        </div>
        <div className="container__hamburger_content_main_paragraph">
          Got any problem? Lets discuss and get to the solution.
        </div>
      </a>
    </div>
 );
};
    
export default HamburgerContents;
