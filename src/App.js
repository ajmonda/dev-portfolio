import React from "react";

import Landing from "./components/Landing/Landing";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";

import "./app.css";

export default function App() {
  return (
    
    <div className="app">
      <div className="columnContainer">
      <div className="column" />
      </div>
      <Landing />
      {/* <Skills />
      <Projects />
        <Contact /> */}
    </div>
  );
}
