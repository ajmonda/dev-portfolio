import React from "react";

import "./subheader.css";

export default function Subheader() {
  return (
    <div className="subheader">
      <div className="subheaderLinks">
        <a href="https://github.com/ajmonda">
          {" "}
          <i class="devicon-github-plain"></i>
        </a>

        <a href="http://linkedin.com/in/ajmonda/">
          <i class="devicon-linkedin-plain"></i>
        </a>
      </div>
      <h2>Full-Stack Web Developer</h2>
    </div>
  );
}
