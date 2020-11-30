import React from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";

import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div className="columnContainer">
        <div className="column" />
      </div>
      <Header />
      <Main />
    </div>
  );
}
