import React from 'react'
import './projects.css'
import Subtitle from '../Header/Subtitle/Subtitle'

export default function Projects(props) {
  return (
    <div className="projects" style={props.style}>
      <h3>Projects</h3>
      <Subtitle />
      <Subtitle />
      <Subtitle />
    </div>
  )
}