import React from "react";
import Project from "./Project/Project";
import "./projects.css";

import { projects } from "../../utils/copy";

export default function Projects() {
  return (
    <div className="projects">
      <div className="projects-header">
        <h3>Projects</h3>
        <p
          style={{
            color: "gold",
            margin: "0",
            paddingBottom: "15px",
            alignSelf: "flex-end",
          }}
        >
          (Hover for preview)
        </p>
      </div>
      {projects.map((project) => {
        return (
          <Project
            title={project.title}
            videoSrc={project.videoSrc}
            icons={project.icons}
            summary={project.summary}
          />
        );
      })}
    </div>
  );
}
