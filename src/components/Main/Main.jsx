import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";

import Picture from "../Picture/Picture";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

import { bio } from "../../utils/copy";

import "./main.css";

export default function Main() {
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  const onStepExit = () => {
    setCurrentStepIndex(-1);
  };

  return (
    <main>
      <div className="scroll">
        <p style={{ fontWeight: currentStepIndex < 0 ? "bold" : "200" }}>
          I'm Tony, and I love a challenge.
        </p>
        <Scrollama
          onStepEnter={onStepEnter}
          onStepExit={onStepExit}
        >
          {bio.map((paragraph, i) => {
            return (
              <Step data={i}>
                <p
                  style={{
                    fontWeight: currentStepIndex === i ? "bold" : "200",
                  }}
                >
                  {paragraph}
                </p>
              </Step>
            );
          })}
        </Scrollama>
      </div>

      <div
        className="content"
        style={{ display: currentStepIndex < 0 ? "none" : "flex" }}
      >
        <Skills style={{ display: currentStepIndex === 0 ? "flex" : "none" }} />
        <Projects
          style={{ display: currentStepIndex === 1 ? "flex" : "none" }}
        />
        <Contact
          style={{ display: currentStepIndex === 2 ? "flex" : "none" }}
        />
      </div>
    </main>
  );
}
