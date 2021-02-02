import React from "react";

import "./project-header.css";

export default function ProjectHeader(props) {
  return (
    <div className="projectHeader">
      <div className="projectIcons">
        {props.projectIcons.map((icon) => {
          return <i className={icon}></i>;
        })}
      </div>

      <div className="projectHeadRight">
        <h2 style={{ fontWeight: "400", marginRight: "10px" }}>
          {props.projectTitle}
        </h2>
        <svg
          fontWeight="bold"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-chevron-down"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
    </div>
  );
}
