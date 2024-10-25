<<<<<<< HEAD
import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="container main">
      <div className="wrapper">
        <div className="logo">
          <span>Pixel Prodigy</span>
          <span style={{ color: "crimson", fontSize: "1.3em" }}>.</span>
        </div>
        <div className="lists">
          <ul>
            <li>
              <Link to="home" smooth={true} duration={500}>Home</Link>
            </li>
            <li>
              <Link to="mainfeatures" smooth={true} duration={500}>Features</Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500}>Services</Link>
            </li>
            <li>
              <Link to="pricing" smooth={true} duration={500}>Pricing</Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="button">
          <button className="btn fw-bold">Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
=======
import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="container main">
      <div className="wrapper">
        <div className="logo">
          <span>Pixel Prodigy</span>
          <span style={{ color: "crimson", fontSize: "1.3em" }}>.</span>
        </div>
        <div className="lists">
          <ul>
            <li>
              <Link to="home" smooth={true} duration={500}>Home</Link>
            </li>
            <li>
              <Link to="mainfeatures" smooth={true} duration={500}>Features</Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500}>Services</Link>
            </li>
            <li>
              <Link to="pricing" smooth={true} duration={500}>Pricing</Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="button">
          <button className="btn fw-bold">Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
>>>>>>> 5a84f5fdfd4b446c55c304790ce134a4a1595fe8
