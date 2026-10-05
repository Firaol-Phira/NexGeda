import "./MainHeader.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/NexGedalogo-04.png";
function MainHeader() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid px-4">
        <a href="#home" className="navbar-brand logo">
          <img src={logo} alt="Logo" />
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
              <Link className="nav-link " to="/">
                Home
              </Link>
            </li>

           

            <li className="nav-item">
              <a className="nav-link" href="#academy">
                Academy
              </a>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Scholarship">
                Scholarship
              </Link>
            </li>
 <li className="nav-item">
              <Link className="nav-link" to="/About">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainHeader;
