import React, { useState } from "react";
import NetlifyForm from "react-ssg-netlify-forms";

import "./contact.css";

export default function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const postSubmit = () => {
    window.alert("Thank you!");
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact">
      <div className="contact-text">
        <a name="contact" />
        <h3>Contact</h3>
        <p>
          Since graduating from boot camp, I've been on the lookout for my next
          challenge. I am constantly honing and leveling up my skillset,
          building personal passion projects, and engaging with the industry.
          Currently, I'm <span>seeking full-time work</span> where I can
          continue that growth while helping your organization reach its goals.
          I am particulary interested in the ways tech can be used purposefully
          to generate greater accessibility.
        </p>
        <p
          style={{
            textAlign: "center",
            marginBottom: "0",
          }}
        >
          I hope to hear from you! &#128075;
          <br />
          <a href="https://www.linkedin.com/in/ajmonda/" target="_blank">
            <i class="devicon-linkedin-plain"></i>
          </a>
          <a href="https://github.com/ajmonda" target="blank">
            <i class="devicon-github-original"></i>
          </a>
        </p>
      </div>

      <NetlifyForm
        className="contact-form"
        formName="contact"
        formValues={formValues}
        postSubmit={postSubmit}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formValues.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChange}
          required
        />
        <textarea
          rows="5"
          name="message"
          value={formValues.message}
          onChange={handleChange}
          required
        />
        <input id="click" type="submit" value="Send" />
      </NetlifyForm>
    </div>
  );
}
