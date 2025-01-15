import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navClicked, setNavClicked] = useState(false);
  const closeNavHandler = () => setNavClicked(false);

  return (
    <header className="header">
      <Link to="/" onClick={closeNavHandler}>
        <img src="./logo.png" alt="logo" className="logo" />
      </Link>

      <nav className="nav">
        <ul
          className={`nav__links_container ${navClicked ? "navBarActive" : ""}`}
        >
          <li>
            <Link className="nav__link" to="/" onClick={closeNavHandler}>
              Home
            </Link>
          </li>

          <li>
            <Link className="nav__link" to="/about" onClick={closeNavHandler}>
              About
            </Link>
          </li>

          <li>
            <Link
              className="nav__link"
              to="/services"
              onClick={closeNavHandler}
            >
              Services
            </Link>
          </li>

          <li>
            <Link className="nav__link" to="/contact" onClick={closeNavHandler}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className={`burger ${navClicked ? "toggle" : ""}`}
        onClick={() => setNavClicked((prev) => !prev)}
      >
        <div className="line line__1"></div>
        <div className="line line__2"></div>
        <div className="line line__3"></div>
      </div>
    </header>
  );
};

export default Navbar;
