import React from "react";
import "./contact.css";

export default function Contact() {
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
            marginBottom: "0"
          }}
        >
          I hope to hear from you! &#128075;
          <br />
          <a href="https://www.linkedin.com/in/ajmonda/" target="_blank"><i class="devicon-linkedin-plain"></i></a>
          <a href="https://github.com/ajmonda" target="blank"><i class="devicon-github-original"></i></a>
        </p>
      </div>
      <form className="contact-form">
        <input type="hidden" name="contact_number" />
        <input type="text" name="user_name" placeholder="Name" />
        <input type="email" name="user_email" placeholder="Email" />
        <textarea rows="5" name="message"></textarea>
        <input id="click" type="submit" value="Send" />
      </form>
    </div>
  );
}
