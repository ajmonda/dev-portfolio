import React from "react";

import Title from "./Title/Title";
import Subtitle from './Subtitle/Subtitle';

import "./header.css";

export default function Header() {
  return (
    <header>
      <Title />
      <Subtitle />
    </header>
  );
}
