import "./left.css";
import Ade from "../leftBar/Ad/Ade";
import Searchbar from "./SearchBar/Searchbar";
import { Link } from "react-router-dom";

export default function Left() {
  return (
    <section className="leftMenu">
      <div className="menu_Container">
        {/*-----Logo-----*/}
        <div className="logoCotainer">
          <img className="Logo" src="/public/Images/main_logo.png" alt="Logo" />
        </div>
        {/*-----Search Bar-----*/}
        {/* <div className="searchBar">
          <input type="text" placeholder="Search..." />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div> */}
        <Searchbar />

        {/*-----Menu List-----*/}
        <div className="menu_List">
          <p>Menu</p>
          <ul>
            <li>
              <i className="fa-solid fa-house"></i>
              <Link className="linkColor" to="/">Home</Link>
            </li>

            <li>
              <i className="fa-solid fa-heart"></i>
              <Link className="linkColor" to="/favorites">Favorite</Link>
            </li>
            <li>
              <i className="fa-solid fa-headphones"></i>
              <Link className="linkColor" to="/favorites">PlayList</Link>
            </li>
          </ul>
        </div>
        <Ade />
      </div>
    </section>
  );
}
