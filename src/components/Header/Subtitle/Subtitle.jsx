import React from "react";

import "./subtitle.css";

export default function Subtitle() {
  return (
    <div className="subtitle">
      <div className="subtitleLinks">
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
