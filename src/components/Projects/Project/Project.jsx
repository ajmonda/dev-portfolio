import React, { useState } from "react";
import "./project.css";

export default function Project(props) {
  const [summaryVisible, setSummaryVisible] = useState(true);

  const handleMouseOver = (e) => {
    e.target.play();
  };

  const handleMouseOut = (e) => {
    e.target.pause();
  };

  return (
    <div className="project">
      <div className="video-container">
        <video
          onMouseOver={(e) => handleMouseOver(e)}
          onMouseOut={(e) => handleMouseOut(e)}
        >
          <source src="https://github.com/ajmonda/dev-portfolio/blob/feature/videos/src/media/RubyDungeon.mov?raw=true" />
        </video>
      </div>

      <div className="project-summary">
        <h4>{props.title}</h4>
        <h4
          style={{
            color: "turquoise",
            fontSize: "20px"
          }}
        >
          {props.icons.map((icon) => {
            return <i className={icon}></i>;
          })}
        </h4>
        <p>{props.summary}</p>
        <button className="project-button">
          Launch
        </button>
      </div>
    </div>
  );
}
