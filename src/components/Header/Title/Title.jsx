import React from "react";
import Subheader from "../Subtitle/Subtitle";
import "./title.css";

export default function Title() {
  return (
    <div className="title">
      
      <div className="titleText">
        <h1>Tony Monda</h1>
      </div>

      <div className="titleTextFill">
        <h1>Ton<span id="y">y</span> Monda</h1>

      </div>
    </div>
  );
}
