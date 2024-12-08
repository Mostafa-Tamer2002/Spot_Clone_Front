import "./left.css";
import Ade from "../leftBar/Ad/Ade";
export default function Left() {
  return (
    <section className="leftMenu">
      <div className="menu_Container">
        {/*-----Logo-----*/}
        <div className="logoCotainer">
          <img className="Logo" src="/public/Images/main_logo.png" alt="Logo" />
        </div>
        {/*-----Search Bar-----*/}
        <div className="searchBar">
          <input type="text" placeholder="Search..." />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        {/*-----Menu List-----*/}
        <div className="menu_List">
          <p>Menu</p>
          <ul>
            <li>
              <a href="">
                <i className="fa-solid fa-house"></i>
                Home
              </a>
            </li>

            <li>
              <a href="">
                <i className="fa-solid fa-heart"></i>
                Favorite
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-solid fa-headphones"></i>
                PlayList
              </a>
            </li>
          </ul>
        </div>
        <Ade />
      </div>
    </section>
  );
}
