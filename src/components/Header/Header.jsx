import React from "react";

import Title from "./Title/Title";
import Subtitle from './Subtitle/Subtitle';
import Nav from '../Nav/Nav'

import "./header.css";

export default function Header() {
  return (
    <header>
      <div className="top-container">
      <Title />
        <Nav />
        </div>
      <Subtitle />
    </header>
  );
}
