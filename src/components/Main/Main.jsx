import React, { useState } from "react";

import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

import "./main.css";

export default function Main() {
  return (
    <main>
      <div className="scroll">
        <p style={{
          fontWeight: "bold" }}>
          Hi. I'm Tony, and I love a challenge.
        </p>

        <p>
          When I lost my job as a bartender in Brooklyn due to the pandemic, I
          enrolled in General Assembly New York's intensive software engineering
          immersive program. After twelve weeks I emerged with robust training
          in full-stack development as well as a diverse and <span>relevant toolbelt
          of programming languages</span> and frameworks.
        </p>

        <p>
          My roles prior to development work demanded that I <span>identify complex
          patterns and details</span> in problems in order to draw big-picture
          conclusions.
        </p>

        <button>View My Resume</button>

        <p>
          As an artist, I learned to <span>synthesize and implement</span> that information
          within my own work. As an educator, I was tasked with
          reassembling those complexities in an <span>accessible</span> manner for students. As a
          counselor and industry worker, all these dots had to be connected in
          order to <span>meet a client's needs</span>.
        </p>

        <p>
          It was these abilities lended to my success as a proficient and creative
          coder as I began to build and deploy my first applications.
        </p>

        <Projects />
        <div className="contactContainer">
          <p style={{ marginTop: "100px" }}>
            Since graduating from boot camp, I've been on the lookout for my
            next challenge. I am constantly honing and leveling up my skillset,
            building personal passion projects, and engaging with the industry.
            Currently, I'm seeking full-time work where I can continue that
            growth while helping your organization reach its goals.
          </p>
          <Contact />
        </div>
      </div>
      <div className="content">
        <Skills />
      </div>
    </main>
  );
}
