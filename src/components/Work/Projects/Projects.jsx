import React, { useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      name: "World Music Hub",
      details:
        "Library comprising of all the songs made by Atif Afzal all over the globe",
      link: "https://wmh.ai/",
      background: "#2c2c2e",
      color: "#d9a86c",
      headColor: "#eee",
    },
    {
      name: "Data Visualization",
      details:
        "It is a basic idea of representing your long excel data sheets in graphical format, hence saving time for you.",
      link: "https://1337-ishaan.github.io/react-data-visualization/",
      background: "#eeeeee",
      color: "#232b2b",
      headColor: "blue",
    },
    {
      name: "Calculator",
      details: "Does not need to be explained :'/ ",
      link: "https://1337-ishaan.github.io/calculator-react/",
      color: "#eee",
      background: "#232b2b",
      headColor: "orange",
    },
    {
      name: "Landing Page for Travel",
      details:
        "Utility landing page for developers wishing to make a travel website.",
      link: "https://1337-ishaan.github.io/travel-landing-page/",
      background: "green",
      color: "#eee",
      headColor: "#fff",
    },
    {
      name: "RoboFriends",
      details:
        "Fetches Robots Images and Name data using API, and searches over it, my first project -_-",
      link: "https://1337-ishaan.github.io/RoboFriends/",
      background: "#232b2b",
      color: "#fff",
      headColor: "yellow",
    },
  ]);
  return (
    <div className="container__work_projects">
      {projects.map((project, i) => (
        <a
          className="container__work_projects_card"
          style={{
            background: `${project.background}`,
            color: `${project.color}`,
          }}
          target="_blank"
          href={`${project.link}`}
          key={i}
        >
          <div
            className="container__work_projects_card_link"
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
