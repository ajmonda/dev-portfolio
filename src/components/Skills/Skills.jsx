import React, { useState } from "react";

import { skills } from "../../utils/copy";

import "./skills.css";

export default function Skills(props) {
  const [skillNameDisplay, setSkillNameDisplay] = useState(-1);

  return (
    <div className="skills" style={props.style}>
      <div className="skills-text">
        <h3>Skills</h3>
        <p>
          In the midst of the ongoing pandemic, I enrolled in General Assembly
          New York's intensive software engineering immersive program. After
          twelve weeks I emerged with robust training in full-stack development
          as well as a diverse and relevant toolbelt of programming languages
          and frameworks.
        </p>

        <p>
          My roles prior to development work demanded that I{" "}
          <span>identify complex patterns and details</span> in problems in
          order to draw big-picture conclusions.
        </p>

        <p>
          As an artist, I learned to <span>synthesize and implement</span> that
          information within my own work. As an educator, I was tasked with
          reassembling those complexities in an accessible manner for students.
          As a counselor and industry worker, all these dots had to be connected
          in order to meet a client's needs.
        </p>
      </div>
      <div className="skillsList">
        <div className="skillsIcons">
          {skills.map((skill, i) => {
            return (
              <i
                key={i}
                className={skill.icon}
                onMouseEnter={() => setSkillNameDisplay(i)}
                onMouseLeave={() => setSkillNameDisplay(-1)}
              />
            );
          })}
        </div>
        <div className="skillsNames">
          {skills.map((skill, i) => {
            return (
              <h4
                key={i}
                style={{
                  opacity: skillNameDisplay === i ? "1" : "0",
                  position: "absolute",
                }}
              >
                {skill.name}
              </h4>
            );
          })}
          <p
            style={{
              opacity: skillNameDisplay < 0 ? "1" : "0",
              position: "absolute",
              color: "gold",
              fontWeight: "bold",
              width: "37vw",
              display: "flex",
              justifyContent: "center"
            }}
          >
            Hover for skill names.
          </p>
        </div>
      </div>
    </div>
  );
}
