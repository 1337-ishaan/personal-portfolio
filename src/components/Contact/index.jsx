import React from "react";
import Form from "./Form/Form";
import About from "../About/index";
const index = () => {
  return (
    <div className="container__contact">
      <div className="u-subject-text">About & Contact</div>
      <About />
      <Form />
    </div>
  );
};

export default index;
