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
        <p> Imagine revisiting cherished moments from your past, beautifully woven together with the melodies that defined those times. Melody Memory was born out of the idea that music has the extraordinary ability to transport us to different eras and evoke emotions tied to our most treasured memories.
            We seamlessly integrate with your Spotify account to curate a personalized soundtrack based on the themes you provide. As you explore the journey through your memories, Melody Memory also displays images associated with specific keywords you input, creating a multisensory and immersive encounter that goes beyond just listening to music.
        </p>
      </div>
    </div>
  )
}

export default About
