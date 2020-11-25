import React from "react";
import Subheader from "../Subtitle/Subtitle";
import "./title.css";

export default function Title() {
  return (
    <div className="title">
      
      <div className="titleText">
        <h1 id="tony"><span id="t">T</span>on<span id="y">y</span></h1>
        <h1 id="monda"><span id="m">M</span>on<span id="d">d</span><span id="a">a</span></h1>
      </div>

      <div className="titleTextFill">
        <h1 id="tonyTextFill">Tony</h1>
        <h1 id="mondaTextFill">Monda</h1>
      </div>
    </div>
  );
}
