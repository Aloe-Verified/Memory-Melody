import './App.css';

import LoginPage from "./Pages/Login.js";
import Navbar from "./Components/Navbar.js";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
