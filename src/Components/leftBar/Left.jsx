import { useState } from "react";
import "./left.css";
import Ade from "../leftBar/Ad/Ade";
import Searchbar from "./SearchBar/Searchbar";
import { Link } from "react-router-dom";

export default function Left() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <section className={`leftMenu ${isCollapsed ? "collapsed" : ""}`}>
      <div className="menu_Container">
        {/*----- Toggle Button -----*/}
        <div className="toggleSection">
          <button className="toggleButton" onClick={toggleSidebar}>
            <i className="fa-solid fa-layer-group"></i>
          </button>
          <p>Your Library</p>
        </div>

        {/*-----Logo-----*/}
        <div className="logoCotainer">
          <img className="Logo" src="/public/Images/main_logo.png" alt="Logo" />
        </div>

        {/*-----Search Bar-----*/}
        {!isCollapsed && <Searchbar />}

        {/*-----Menu List-----*/}
        <div className="menu_List">
          <p>Menu</p>
          <ul>
            <li>
              <i className="fa-solid fa-house"></i>
              <Link className="linkColor" to="/">
                Home
              </Link>
            </li>
            <li>
              <i className="fa-solid fa-heart"></i>
              <Link className="linkColor" to="/favorites">
                Favorite
              </Link>
            </li>
            <li>
              <i className="fa-solid fa-headphones"></i>
              <Link className="linkColor" to="/favorites">
                PlayList
              </Link>
            </li>
          </ul>
        </div>

        {/* Ad Component */}
        {!isCollapsed && <Ade />}
      </div>
    </section>
  );
}
