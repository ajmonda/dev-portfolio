import React from "react";
import "./bio-scroll.css";

export default function BioScroll(props) {
  return (
    <div className="bio-scroll" id={props.id} style={props.expanded}>
      <p>{props.bioLine}</p>
    </div>
  );
}
