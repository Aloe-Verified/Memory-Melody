import React from 'react';
import "../Styles/Login.css";
import img from "../Assets/HappyPerson1.jpg";
import background from "../Assets/LoginBackground2.jpg";

function Login() {
  return (

    <div className="banner-area" style={{ backgroundImage: `url(${background})` }} id="home">
      <div className="container">
          <div className="banner">
              <div className="banner-content">
                  <h5>WELCOME TO</h5>
                  <h2>Memory <span>Melody</span></h2>
                  <p>
Embark on a delightful journey as you seamlessly explore cherished images intertwined with the familiar melodies that resonate with your memories!</p>
              </div>
              <div className="banner-img">
                <img src={img} alt="Logo picture"></img>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Login