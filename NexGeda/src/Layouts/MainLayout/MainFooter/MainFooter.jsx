import React from "react";
import { Link } from "react-router-dom";
import "./MainFooter.css";

function MainFooter() {
  return (
    <footer className="nexgeda-main-footer py-5 px-3 px-md-5 border-top">
      <div className="container-fluid">
        <div className="row gy-4 justify-content-between">
          {/* Column 1: Brand & Intro Statement */}
          <div className="col-12 col-md-4">
            <div className="footer-logo mb-3">
              Nex<span>Geda</span>
            </div>
            <p className="footer-description text-secondary">
              Master production-grade full-stack engineering, interface design,
              and scalable systems through hands-on labs.
            </p>
          </div>

          {/* Column 2: Navigation Links Tree */}
          <div className="col-6 col-sm-4 col-md-2 offset-md-1">
            <h6 className="footer-section-title text-uppercase fw-bold mb-3">
              Platform
            </h6>
            <ul className="list-unstyled footer-links-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/academy">Academy Tracks</Link>
              </li>
              <li>
                <Link to="/scholarship">Scholarships</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Alternate Links Tree */}
          <div className="col-6 col-sm-4 col-md-2">
            <h6 className="footer-section-title text-uppercase fw-bold mb-3">
              Support
            </h6>
            <ul className="list-unstyled footer-links-list">
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Box or Social Links */}
          <div className="col-12 col-sm-4 col-md-3">
            <h6 className="footer-section-title text-uppercase fw-bold mb-3">
              Follow Us
            </h6>
            <div className="d-flex gap-3 fs-5 footer-social-matrix mb-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                title="YouTube"
              >
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                title="Instagram"
              >
                <i className="bi bi-telegram fs-4"></i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                title="GitHub"
              >
                <i className="bi bi-tiktok fs-4"></i>
              </a>
            </div>
            <span className="fs-7 text-secondary">
              Accelerate your tech future with us.
            </span>
          </div>
        </div>

        {/* Bottom Bar: Copyright Statement Row */}
        <div className="row mt-5 pt-4 border-top border-secondary-subtle align-items-center">
          <div className="col-12 text-center text-md-start col-md-6 text-secondary fs-7">
            &copy; {new Date().getFullYear()} NexGeda Academy. All rights
            reserved.
          </div>
          <div className="col-12 text-center text-md-end col-md-6 text-secondary fs-7 mt-2 mt-md-0">
            Engineered for the next generation of tech leaders.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MainFooter;
