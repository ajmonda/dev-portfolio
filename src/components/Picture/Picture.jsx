import React from 'react'

export default function Picture(props) {
  return (
    <div className="picture" style={props.style}>
      <img src="https://i.imgur.com/gz4KW44.jpg" alt="me" />
    </div>
  )
}
