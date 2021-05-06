import React, { useState } from "react";

const Projects = () => {
  const projects = [
    {
      name: "World Music Hub",
      details:
        "Library comprising of all the songs made by Atif Afzal all over the globe",
      link: "https://wmh.ai/",
      background: "44, 44, 46",
      color: "#d9a86c",
      headColor: "#eee",
    },
    {
      name: "IITian's Science Point",
      details:
        "A client website made for a well reputed coaching classes",
      link: "http://isciencepoint.com/",
      background: "0,0,50",
      color: "#eee",
      headColor: "#fff",
    },
    {
      name: "E-ventify",
      details:
        "The perfect showcase for the services provided by an Event Mangement Company",
      link: "http://eventify.in/",
      background: "44, 63, 110",
      color: "#fff",
      headColor: "#d9a86c",
    },
    {
      name: "Data Visualization",
      details:
        "It is a basic idea of representing your long excel data sheets in graphical format, hence saving time for you.",
      link: "https://1337-ishaan.github.io/react-data-visualization/",
      background: "220, 220, 220",
      color: "#000",
      headColor: "#000",
    },

    {
      name: "Calculator",
      details: "Does not need to be explained :'/ ",
      link: "https://1337-ishaan.github.io/calculator-react/",
      color: "#eee",
      background: "35, 43, 43",
      headColor: "orange",
    },
    // {
    //   name: "Landing Page for Travel",
    //   details:
    //     "Utility landing page for developers wishing to make a travel website.",
    //   link: "https://1337-ishaan.github.io/travel-landing-page/",
    //   background: "0, 128, 0",
    //   color: "#eee",
    //   headColor: "#fff",
    // },

  ];
  return (
    <div className="container__work_projects">
      {projects.map((project, i) => (
        <a
          className="container__work_projects_card"
          style={{
            background: `rgba(${project.background},.6)`,
            color: `${project.color}`,
          }}
          target="_blank"
          href={`${project.link}`}
          key={i}
        >
          <div
            className="container__work_projects_card_head"
            style={{ color: `${project.headColor}` }}
          >
            {project.name}
          </div>
          <hr />
          <p className="container__work_projects_card_details">
            {project.details}
          </p>
        </a>
      ))}
    </div>
  );
};

export default Projects;
