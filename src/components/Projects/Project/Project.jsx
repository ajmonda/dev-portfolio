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
        <video
          onMouseOver={(e) => handleMouseOver(e)}
          onMouseOut={(e) => handleMouseOut(e)}
        >
          <source src={props.videoSrc} />
        </video>

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
        <a href={props.url} target="_blank"><button className="project-button">
          Launch
        </button></a>
      </div>
    </div>
  );
}
