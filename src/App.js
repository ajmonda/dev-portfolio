import React from "react";

import Landing from "./components/Landing/Landing";
import Main from "./components/Main/Main.jsx";

import './app.css'

export default function App() {
  return (
    <div className="app">
      <Landing />
      <Main />
    </div>
  );
}
