import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../Assets/MMLogo.png";
import "../Styles/Navbar.css";

function Navbar () {
  return (
    <div className="navbar">

      <div className="leftSide">
        <img src={logo} />
      </div>
      <div className="rightSide"> 
        <Link to="/">Login</Link>
      </div>

    </div>
  )
}

export default Navbar
