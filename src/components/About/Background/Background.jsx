import React from "react";
import GridHeading from "../../utilities/Grid/GridHeading";
import GridParagraph from "../../utilities/Grid/GridParagraph";

const Background = () => {
  return (
    <div className="u-container-for-grid">
      <GridHeading>Background</GridHeading>
      <GridParagraph>
        Over the last few months, I have been working as an intern at{" "}
        <b style={{ color: "green" }}>Open Consulting Group (OCG)</b> and also
        learning cool and useful tech. I am a big believer of consistent
        failures, cause that's where the real learning happens.
      </GridParagraph>
    </div>
  );
};

export default Background;
