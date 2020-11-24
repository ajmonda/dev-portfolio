import React from "react";
import { Scrollama, Step } from "react-scrollama";

import BioScroll from "../BioScroll/BioScroll";

import "./main.css";

import { bio } from "../../utils/copy";

export default function Main(props) {
  return (
    <div className="main" style={props.style}>

      <div className="bio" style={props.bioStyle}>
        {bio.map((bioLine, i) => {
          return <BioScroll bioLine={bioLine} key={i} />;
        })}
      </div>

      <div className="content"></div>

    </div>
  );
}
