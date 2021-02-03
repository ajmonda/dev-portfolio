import React from "react";

import Header from "./components/Header/Header";
import Nav from './components/Nav/Nav'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/Skills'
import Projects from "./components/Projects/Projects";

import "./App.css";

export default function App() {
  return (
    <div className="app">
      <div className="column" />
      <div className="main-container">
        <Header />
        <Intro />
        <Skills />
        <Projects />
      </div>
    </div>
  );
}
