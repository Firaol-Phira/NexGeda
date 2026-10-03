import "./MainHeader.css";
import { Link } from "react-router-dom";
function MainHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid px-4">
        {/* Logo */}
        <a className="navbar-brand fw-bold fs-3" href="#home">
          Nex<span>Geda</span>
        </a>

        <div className="d-flex align-items-center gap-2 order-lg-last">
         
          <Link to="/signin" className="signin-btn px-3 order-1 order-lg-last">
            Sign In
          </Link>

          {/* 3-line menu toggler */}
          <button
            className="navbar-toggler order-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Navigation */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3">
            <li className="nav-item">
              <a className="nav-link " href="#home">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#academy">
                Academy
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#scholarship">
                Scholarship
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainHeader;
