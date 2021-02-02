import React, { useState } from "react";

import { skills } from "../../utils/copy";

import "./skills.css";

export default function Skills(props) {
  const [skillNameDisplay, setSkillNameDisplay] = useState(null);

  return (
    <div className="skills" style={props.style}>
      <img src="https://i.imgur.com/yVseRYX.png" alt="me"/>
      <h3>Skills</h3>
      <div className="skillsList">
        <div className="skillsIcons">
          {skills.map((skill, i) => {
            return (
              <i
                key={i}
                className={skill.icon}
                onMouseEnter={() => setSkillNameDisplay(i)}
                onMouseLeave={() => setSkillNameDisplay(null)}
              />
            );
          })}
        </div>
        <div className="skillsNames">
          {skills.map((skill, i) => {
            return (
              <h4
                key={i}
                style={{ display: skillNameDisplay === i ? "flex" : "none" }}
              >
                {skill.name}
              </h4>
            );
          })}
        </div>
      </div>
    </div>
  );
}
