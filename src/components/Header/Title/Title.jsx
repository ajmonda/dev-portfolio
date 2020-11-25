import React from "react";
import Subheader from "../Subtitle/Subtitle";
import "./title.css";

export default function Title() {
  return (
    <div className="title">
      
      <div className="titleText">
        <h1 id="tony">Tony</h1>
        <h1 id="monda">Monda</h1>
      </div>

      <div className="titleTextFill">
        <h1 id="tonyTextFill">Tony</h1>
        <h1 id="mondaTextFill">Monda</h1>
      </div>
    </div>
  );
}
