import React, { useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      name: "World Music Hub",
      details: "sasasas",
      link: "https://wmh.ai/",
    },
    {
      name: "Data Visualization",
      details: "Lorem ipsim scdscdsc",
      link: "https://1337-ishaan.github.io/react-data-visualization/",
    },
    {
      name: "Calculator",
      details: "asasdfv  adsaf  fdf",
      link: "https://1337-ishaan.github.io/calculator-react/",
    },
    {
      name: "Landing Page for Travel",
      details: "user ionterfave dcac acdc",
      link: "https://1337-ishaan.github.io/travel-landing-page/",
    },
    {
      name: "RoboFriends",
      details: "knadamnsdk osajdadj ainainfds",
      link: "https://1337-ishaan.github.io/RoboFriends/",
    },
  ]);

  return (
    <div className="container__work__projects">
      {projects.map((project, i) => (
        <div key={i}>
          <a href={`${project.link}`}>{project.name}</a>
          <p>{project.details}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
