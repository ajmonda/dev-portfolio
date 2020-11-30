import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";

import Picture from "../Picture/Picture";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

import { bio } from "../../utils/copy";

import "./main.css";

export default function Main() {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data)
  };

  return (
    <main>
<div className="scroll">
        <Scrollama onStepEnter={onStepEnter}>
    
          {bio.map((paragraph, i) => {
            return (
              <Step data={i}>
                <p style={{fontWeight: currentStepIndex === i ? 'bold' : '200'}}>{paragraph}</p>
              </Step>
            );
          })}
        
      </Scrollama>
      </div>

      <div className="content" style={{display: !currentStepIndex ? 'none' : 'flex'}}>
        {/* <Picture style={{display: currentStepIndex === 0 ? 'flex' : 'none'}}/> */}
        <Skills style={{display: currentStepIndex === 1 ? 'flex' : 'none'}}/>
        <Projects style={{display: currentStepIndex === 2 ? 'flex' : 'none'}}/>
        <Contact style={{display: currentStepIndex === 3 ? 'flex' : 'none'}}/>
      </div>

    </main>
  );
}
