import React from "react";
import Typewriter from "typewriter-effect";

const DynamicText = () => {
  return (
    <div className="container__dynamicText">
      Talk &nbsp;
      <Typewriter
        options={{
          strings: [
            "e-commerce?",
            "personal portfolio?",
            "business website?",
            "tech?",
            "chat website?",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default DynamicText;
