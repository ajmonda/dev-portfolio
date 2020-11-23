import React from "react";
import { Scrollama, Step } from "react-scrollama";

import "./landing.css";

const onStepEnter = () => {
    console.log("enter")
}

const onStepExit = () => {
  console.log("exit")
}


export default function Landing() {
  return (
    <div className="landing">
      <Scrollama offset={0.4} onStepEnter={onStepEnter} onStepExit={onStepExit} debug>
        <Step>
          <h1>Hi. I'm Tony, and I love a challenge.</h1>
        </Step>
      </Scrollama>
    </div>
  );
}
