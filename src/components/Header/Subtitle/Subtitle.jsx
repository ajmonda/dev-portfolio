import React from "react";

import "./subtitle.css";

export default function Subtitle() {
  return (
    <div className="subtitle">
      <div className="subtitleLinks">
        <a href="https://github.com/ajmonda">
          {" "}
          <i className="devicon-github-plain"></i>
        </a>

        <a href="http://linkedin.com/in/ajmonda/">
          <i className="devicon-linkedin-plain"></i>
        </a>
      </div>
      <h2>Full-Stack Software Engineer</h2>
    </div>
  );
}
