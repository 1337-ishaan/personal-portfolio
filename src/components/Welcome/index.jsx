import React from "react";
import GridHeading from "../utilities/Grid/GridHeading";
import GridParagraph from "../utilities/Grid/GridParagraph";

const index = () => {
  return (
    <div className="u-container-for-grid">
      <GridHeading>Welcome</GridHeading>
      <GridParagraph>
        I'm Ishaan Parmar, an open and indefatigable geek, I develop websites,
        play with tech and try making this world a better place. You can find me
        travelling across India :D
      </GridParagraph>{" "}
    </div>
  );
};

export default index;
