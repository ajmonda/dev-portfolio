import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";

import Main from "../Main/Main";

import "./landing.css";

export default function Landing() {
  const [expanded, setExpanded] = useState(false);

  const onStepEnter = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="landing">
        <Scrollama offset={0.4} onStepEnter={onStepEnter} debug>
          <Step>
            <h1>Hi. I'm Tony, and I love a challenge.</h1>
          </Step>
        </Scrollama>
      </div>
      <Step>
        <Main
          style={{ minWidth: expanded ? "100vw" : "0" }}
          bioStyle={{ opacity: expanded ? "1" : "0" }}
        />
      </Step>
    </>
  );
}
