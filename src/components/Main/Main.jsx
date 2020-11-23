import React from "react";
import { Scrollama, Step } from "react-scrollama";

import BioScroll from "../BioScroll/BioScroll";

import "./main.css";

import { bio } from "../../utils/copy";

export default function Main() {
  return (
    <div className="main">

      <div className="bio">
        {bio.map((bioLine, i) => {
          return <BioScroll bioLine={bioLine} key={i} />;
        })}
      </div>

      <div className="content"></div>
      
    </div>
  );
}
