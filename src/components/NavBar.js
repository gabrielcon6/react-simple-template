import React from "react";
import { Link } from "@reach/router";

import logo from "../images/CROPED_LOGO.png";
import "./NavBar.css";

const Navbar = (props) => {
  return (
    <header className="nav">
      <img className="nav-logo" src={logo} alt="Logo"></img>
      <div className="nav-links__group">
        <Link className="nav-links__link nav-links__link-home" to="/">
          <span>Home</span>
        </Link>
        <Link className="nav-links__link nav-links__link-home" to="/services">
          <span>Services</span>
        </Link>
        <Link className="nav-links__link nav-links__link-home" to="/about">
          <span>About</span>
        </Link>
        <Link className="nav-links__link nav-links__link-home" to="/contact">
          <span>Contact</span>
        </Link>
      </div>
      <button className="nav-links__link nav-links__link-home">book now</button>
    </header>
  );
};

export default Navbar;
