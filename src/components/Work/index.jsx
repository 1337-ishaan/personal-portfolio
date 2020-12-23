import React from "react";
import Projects from "./Projects/Projects";
import WorkImage from "./WorkImage/WorkImage";
import ThreeScene from "./ThreeScene.jsx";

const index = () => {
  return (
    <div className="container__work">
      <div className="u-subject-text">Works</div>
      <ThreeScene />
      {/* <WorkImage /> */}
      {/* <Projects /> */}
    </div>
  );
};

export default index;
