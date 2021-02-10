import React from "react";
import "./intro.css";

export default function Intro() {
  return (
    <div className="intro">
      <div className="left">
      <p>
        Hi. I'm Tony, and I love a<span>&nbsp;challenge</span>. &#128170;
      </p>
        
       <a href="https://docs.google.com/document/d/1MJ6FkUSu0Lswwb-wQD7Jp5r-ls1waqBSBKtPXycr8OQ/edit?usp=sharing" target="_blank"><button className="resume-button">Download My Resume</button></a>
        
      </div>
      
      <img id="me" src="https://i.imgur.com/yVseRYX.png" alt="me" />
    </div>
  );
}
