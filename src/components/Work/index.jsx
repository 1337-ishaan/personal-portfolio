import React from "react";
import Projects from "./Projects/Projects";
import WorkImage from "./WorkImage/WorkImage";
import ThreeScene from "./ThreeScene.jsx";
import Parallax from "./Parallax";
import { Planet } from 'react-planet';

const index = () => {
  return (
    <div className="container__work">
      <div className="u-subject-text">Works</div>
                <div className="container__work_animations">
                    
                <Parallax />
               <ThreeScene />
                <Projects />
                </div>
    </div>
  );
};

export default index;
