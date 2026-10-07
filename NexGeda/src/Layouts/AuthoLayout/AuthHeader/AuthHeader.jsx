import React from "react";
import { Link } from "react-router-dom"; // Using Link instead of <a> for proper SPA routing
import "./AuthHeader.css";
import logo from "../../../assets/NexGedalogo2-04.png";

function AuthHeader() {
  return (
    <header className="fixed-top auth-navbar navbar navbar-expand border-bottom px-3 px-md-5">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}

        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>

        {/* Navigation Support Links */}
        <nav className="nav auth-nav-links">
          <Link to="/" className="nav-link fw-semibold px-2 px-sm-3">
            <i className="bi bi-house-door-fill fs-5"></i>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default AuthHeader;
