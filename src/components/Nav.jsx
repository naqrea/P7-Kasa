import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/svg/logo-red.svg";

const Nav = () => {
  const location = useLocation();

  return (
    <nav>
      <img src={logo} alt="" />
      <ul>
        <li>
          <Link to="/" className={location.pathname === "/" ? "is-active" : ""}>
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "is-active" : ""}
          >
            À propos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
