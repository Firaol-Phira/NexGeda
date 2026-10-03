import React from "react";
import { Link } from "react-router-dom"; // Using Link instead of <a> for proper SPA routing
import "./AuthHeader.css";

function AuthHeader() {
  return (
    <header className="auth-navbar navbar navbar-expand border-bottom px-3 px-md-5 py-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Brand Logo - Links back to the homepage */}
        <Link
          to="/"
          className="auth-brand-logo fs-4 fw-bold text-decoration-none"
        >
          Nex<span className="brand-red-text">Geda</span>
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
