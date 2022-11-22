import React from "react";
// 2 - links com react router
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
        <li>
          <NavLink to="/creditos">Creditos</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
