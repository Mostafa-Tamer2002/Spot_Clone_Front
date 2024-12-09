import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Left from "./src/Components/leftBar/Left";
import Favorites from "./src/Pages/Favorites"; // Your favorites page
import Home from "./src/Pages/Home"; //  Home page
import "./src/App.css";

import { useContext } from "react";
import Playerbar from "./src/Components/Playerbar";
import { Playerbarcontext } from "./src/Context/Playerbarcontext";

export default function App() {
  const { audioRef, track } = useContext(Playerbarcontext);
  return (
    <Router>
      <div className="app">
        {/* Sidebar*/}
        <div className="sidebar-container">
          <Left />
        </div>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home Page */}
            <Route path="/favorites" element={<Favorites />} />{" "}
            {/* Favorites Page */}
          </Routes>
        </div>
        <Playerbar />
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </Router>
  );
}
