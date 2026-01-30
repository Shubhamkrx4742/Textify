import React from "react";
import "./Navbar.css";
import ToggleSwitch from "./ToggleSwitch";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">

        {/* Logo */}
        <a className="navbar-brand pro-brand" href="/">
          {props.title}
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          {/* LEFT LINKS */}
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  <li className="nav-item">
    <a className="nav-link pro-link" href="/">Home</a>
  </li>

  <li className="nav-item">
    <a className="nav-link pro-link" href="/">About</a>
  </li>
</ul>

          {/* RIGHT TOGGLE SWITCH */}
          <ToggleSwitch mode={props.mode} toggleMode={props.toggleMode} />

        </div>
      </div>
    </nav>
  );
}
