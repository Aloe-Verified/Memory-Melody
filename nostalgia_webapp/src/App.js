import './App.css';

import LoginPage from "./Pages/Login.js";
import About from "./Pages/About.js";
import Home from "./Pages/Home.js";
import Navbar from "./Components/Navbar.js";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
