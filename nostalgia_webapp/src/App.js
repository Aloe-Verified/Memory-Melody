import './App.css';
import LoginPage from "./Pages/Login.js";
import About from "./Pages/About.js";
import Home from "./Pages/Home.js";
import Navbar from "./Components/Navbar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';


const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function App() {
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    </Auth0Provider>
  );
}

export default App;