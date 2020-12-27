import React from "react";
import Projects from "./Projects/Projects";
import WorkImage from "./WorkImage/WorkImage";
import ThreeScene from "./Three/ThreeScene.jsx";
import Parallax from "./Three/Parallax";

const index = () => {
  return (
    <div id="works" className="container__work">
      <div className="u-subject-text">Works</div>
                <div className="container__work_animations">
                    
               <ThreeScene />
                <Parallax />
                <Projects />
                </div>
    </div>
  );
};

export default index;
