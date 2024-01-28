import React from 'react';
import "../Styles/Home.css";
import background from "../Assets/HomeBackground.jpg";
import { useState } from 'react';
import axios from 'axios';
import Slideshow from '../Components/Slideshow.js';
import SpotifyPlayer from "../function.js";

function Home() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic with the input value
    try {
      fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ data: inputValue }),
      }).then((res) => {
        return res.json()
      }).then(function(data){
        const thing = JSON.parse(data);
        console.log(data);
        let f = thing.datagood;
        console.log(f);
      });
    } catch (error) {throw error};
    // axios.post('/api', JSON.stringify({ data: inputValue })).then(response => {
    //   console.log(response.data);
    // }).catch(error => {
    //   console.error('Error:',error);
    // });
    console.log('Submitted value:', inputValue);
  };



  return (
    <div className="home" style={{ backgroundImage: `url(${background})` }}>
      <div>
        <h4>Input words to produce sentimental images surrounding those words. To have a customized playlist play in the background, scroll down!</h4>
      </div>

      <form onSubmit={handleSubmit} className="formField">
        <label>
          Enter two words separated by commas: &nbsp;
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            className="input-field"
          />
        </label>
        <button type="submit" className="submit-button">Play Slideshow!</button>
      </form>
      <div>
        <Slideshow/>
      </div>
      <div>
        <SpotifyPlayer/>
      </div>
    </div>

  
  )
}

export default Home
