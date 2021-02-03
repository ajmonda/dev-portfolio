import React from "react";
import "./project.css";

export default function Project(props) {
  return (
    <div className="project">
      <img src={props.imageUrl} alt={props.title} />
      <div className="project-summary">
        <h4>{props.title}</h4>
        <h4 style={{
          color: "turquoise"}}>
          {props.icons.map((icon) => {
            return <i className={icon}></i>
          })}
        </h4>
        <button
          style={{
            marginTop: "30px",
          }}
        >
          Launch
        </button>
      </div>
    </div>
  );
}
