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
                  <h2>Memory <span>Melody</span></h2>
                  <p>Embark on a delightful journey as you explore familiar images mixed with the comforting melodies that resonate with your memories. To begin, just click the login button in the top right!</p>
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