import React from "react";
import "./projects.css";
import ProjectHeader from "./ProjectHeader/ProjectHeader";

export default function Projects(props) {
  return (
    <div className="projects" style={props.style}>
      <h3>Projects</h3>
      <ProjectHeader
        projectIcons={["devicon-react-plain"]}
        projectTitle="Spotify Niche"
      />
      <ProjectHeader
        projectIcons={["devicon-react-plain", "devicon-rails-plain", "devicon-postgresql-plain"]}
        projectTitle="Benchmark Workout Log"
      />
      <ProjectHeader
        projectIcons={[
          "devicon-html5-plain",
          "devicon-javascript-plain",
        ]}
        projectTitle="Write to Congress"
      />
      <ProjectHeader
        projectIcons={[
          "devicon-react-plain", "devicon-mongodb-plain", "devicon-express-original"
        ]}
        projectTitle="Eleventh Hour Rescue"
        />
    </div>
  );
}
