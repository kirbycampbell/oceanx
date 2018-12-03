import React from "react";
import { NavLink } from "react-router-dom";
import "../../../node_modules/materialize-css/dist/css/materialize.css";
import { Home } from "./home";

const NavBar = () => {
  return (
    <div className="container-fluid ">
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <NavLink className="waves-effect waves-light btn" to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="waves-effect waves-light btn" to="/mainpage">
                Main Page
              </NavLink>
            </li>
            <li>
              <NavLink className="waves-effect waves-light btn" to="/barlist">
                Bar Search
              </NavLink>
            </li>
            <li>Cocktail DataBase and Bar Finder App!</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
