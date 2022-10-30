import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/icons/logo.png";
import downArrow from "../../assets/icons/down-arrow.png";
const Navbar = () => {
  return (
    <nav className="Container">
      <div>
        <Link to="/" className="navStart">
          <img src={logo} alt="logo" />
          <p>Doctor Guide</p>
        </Link>
      </div>
      <div id="navMid">
        <Link to="#home">
          <p className="navItem">Home</p>
          <img src={downArrow} alt="arrow" />
        </Link>
        <Link to="#features">
          <p className="navItem">features</p>
          <img src={downArrow} alt="arrow" />
        </Link>
        <Link to="#department">
          <p className="navItem">department</p>
          <img src={downArrow} alt="arrow" />
        </Link>
        <Link to="#event">
          <p className="navItem">event</p>
          <img src={downArrow} alt="arrow" />
        </Link>
        <Link to="#contactus">
          <p className="navItem">contactus</p>
        </Link>
      </div>
      <div>
        <Link to="#login">
          <p className="navItem register login">login</p>
        </Link>
        <Link to="#signup">
          <p className="navItem register">signup</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
