import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/icons/logo.png";
import downArrow from "../../assets/icons/down-arrow.png";
const Navbar = () => {
  return (
    <nav className="Container">
      <div className="navStart">
        <Link to="/">
          <img src={logo} alt="logo" />
          <span>Doctor Guide</span>
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
        <Link to="#login" className="userAccess">
          <p className="navItem ">login</p>
        </Link>
        <Link to="#signup" className="userAccess">
          <p className="navItem">signup</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
