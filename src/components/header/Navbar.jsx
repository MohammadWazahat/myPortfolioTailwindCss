import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <section>
        <header>
          <div className="navbar">
            <div className="navTitle">
              <span className="alphaColor">M</span>ohammad
              <span className="alphaColor"> W</span>azahat
            </div>
            <div className="navLinks">
              <ul>
                <li className="navlink">
                  <NavLink to="/home" className="clickLink">
                    Home
                  </NavLink>
                </li>
                <li className="navlink">
                  <NavLink to="/myResume" className="clickLink">
                    My Resume
                  </NavLink>
                </li>
                <li className="navlink">
                  <NavLink to="/myProjects" className="clickLink">
                    My Projects
                  </NavLink>
                </li>
                <li className="navlink">
                  <NavLink to="/aboutMe" className="clickLink">
                    About Me
                  </NavLink>
                </li>
                <li className="navlink">
                  <NavLink to="/contactMe" className="clickLink">
                    Contact Me
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="horizonLineBox">
            <hr className="horizon" />
          </div>
        </header>
      </section>
    </div>
  );
};

export default Navbar;
