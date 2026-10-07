import React from "react";
import { Link } from "react-router-dom";
import "./AuthFooter.css";

function AuthFooter() {
  return (
    <footer className="auth-footer d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 px-3 px-md-5 py-4">
      <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center p-0 gap-3">
        {/* Left Side: Brand & Legal Hyperlinks Layout */}
        <div className="d-flex flex-column flex-sm-row align-items-center gap-2 gap-sm-4 text-center text-sm-start">
          <div className="auth-footer-logo fs-5 fw-bold">
            Nex<span className="brand-red-text">Geda</span>
          </div>
          <nav className="d-flex align-items-center gap-2 footer-links-group">
            <Link to="/about">About Us</Link>
            <span className="divider-bar">|</span>
            <Link to="/terms">Terms of Service</Link>
            <span className="divider-bar">|</span>
            <Link to="/privacy">Privacy Policy</Link>
          </nav>
        </div>

        {/* Right Side: Social Media Icons Matrix */}
        <div className="d-flex gap-3 fs-5 footer-social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            title="Facebook"
          >
            <i className="bi bi-facebook fs-4"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            title="Instagram"
          >
            <i className="bi bi-instagram fs-4"></i>
          </a>
          <a
            href="https://telegram.com"
            target="_blank"
            rel="noreferrer"
            title="TikTok"
          >
            <i className="bi bi-telegram fs-4"></i>
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noreferrer"
            title="YouTube"
          >
            <i className="bi bi-tiktok fs-4"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default AuthFooter;
