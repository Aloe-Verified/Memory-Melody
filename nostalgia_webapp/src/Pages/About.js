import React from 'react'
import background from "../Assets/aboutUsBackground.webp";
import "../Styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{ backgroundImage: `url(${background})` }}> 
      
      </div>
      <div className="aboutBottom"> 
        <h1>ABOUT THE WEBSITE</h1>
        <p> At Memory Melody, we do stuff.
        </p>
      </div>
    </div>
  )
}

export default About
