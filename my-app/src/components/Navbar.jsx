import React from "react";
import "./Navbar.css";
import logo from '../assets/images/logo.png';

const Navbar = () => {
    return (
      <header>
        <img className="logo" src={logo} alt="logo" />
        <nav>
          <ul className="nav__links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Learn</a></li>
            <li><a href="#">Share</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  
  export default Navbar;