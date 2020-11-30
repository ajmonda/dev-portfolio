import React from "react";
import "./skills.css";

export default function Skills(props) {
  return (
    <div className="skills" style={props.style}>
      <h3>Skills</h3>
      <div className="skillsList">
        <div className="skillsIcons">
          <i class="devicon-html5-plain" />
          <i class="devicon-css3-plain" />
          <i class="devicon-javascript-plain" />
          <i class="devicon-nodejs-plain" />
          <i class="devicon-ruby-plain" />
          <i class="devicon-react-original" />
          <i class="devicon-rails-plain" />
          <i class="devicon-mongodb-plain" />
          <i class="devicon-postgresql-plain" />
          <i class="devicon-express-original" />
        </div>
        <div className="skillsNames">
          <h4>HTML5, CSS3</h4>
          <h4>JavaScript, Node.js</h4>
          <h4>Ruby, React</h4>
          <h4>Ruby on Rails, MongoDB</h4>
          <h4>PostgreSQL, Express</h4>
        </div>
      </div>
    </div>
  );
}
