import React from "react";
import "./intro.css";

export default function Intro() {
  return (
    <div className="intro">
      <div className="left">
      <p>
        Hi. I'm Tony, and I love a<span>&nbsp;challenge</span>. &#128170;
      </p>
        
       <a href="https://github.com/ajmonda/dev-portfolio/raw/cleanup/src/media/tony_monda_resume.pdf" download><button className="resume-button">Download My Resume</button></a>
        
      </div>
      
      <img id="me" src="https://i.imgur.com/yVseRYX.png" alt="me" />
    </div>
  );
}
