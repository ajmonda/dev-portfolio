import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";

import BioScroll from "../BioScroll/BioScroll";
import Projects from "../Projects/Projects";

import "./main.css";

import { bio } from "../../utils/copy";

export default function Main(props) {
  const [projectsTab, setProjectsTab] = useState(false);

  const onStepExit = () => {
    setProjectsTab(!projectsTab);
  };


  return (
    <>
      <div className="main" style={props.style}>
        <div className="bio" style={props.bioStyle}>
          <h3>About Me</h3>
          <Scrollama onStepExit={onStepExit}>
            {bio.map((bioLine, i) => {
              return (
                <Step>
                  <div>
                    <BioScroll bioLine={bioLine} key={i} />
                  </div>
                </Step>
              );
            })}
          </Scrollama>
        </div>

        <div className="content"></div>
      </div>
      <Projects style={{ top: projectsTab ? '60vh' : '100vh' }} />
    </>
  );
}
