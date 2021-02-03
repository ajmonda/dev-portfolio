import React from "react";
import "./intro.css";

export default function Intro() {
  return (
    <div className="intro">
      <div className="left">
      <p>
        Hi. I'm Tony, and I love a<span>&nbsp;challenge</span>. &#128170;
      </p>
       <button className="resume-button">View My Resume</button>
      </div>
      
      <img id="me" src="https://i.imgur.com/yVseRYX.png" alt="me" />
    </div>
  );
}
