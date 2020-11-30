import React, {useState} from "react";
import {Scrollama, Step} from 'react-scrollama'

import About from "../About/About";
import Skills from "../Skills/Skills";

import { bio } from "../../utils/copy";

import "./main.css";

export default function Main() {
  return (
    <main>
      <div className="scroll">
        <Scrollama debug>
      {bio.map((paragraph) => {
        return (
          <Step><p>{paragraph}</p></Step>
        )
      })}
          </Scrollama>
      </div>
      <div className="content">
        
      </div>

    </main>
  );
}
