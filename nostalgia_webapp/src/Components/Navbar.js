import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../Assets/MMLogo.png";
import "../Styles/Navbar.css";
import LoginButton from "./LoginButton.js";
import LogoutButton from "./Logout.js";

function Navbar () {
  return (
    <div className="navbar">

      <div className="leftSide">
        <img src={logo} />
      </div>
      <div className="middle">
        <h1>Memory Melody: <span class="tagline">Tune in to Memories</span></h1>
      </div>
      <div className="rightSide"> 
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <LoginButton/>
        <LogoutButton/>   
      </div>

    </div>
  )
}

export default Navbar
