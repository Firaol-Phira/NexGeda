import "./Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container-fluid px-4">
        {/* Logo */}
        <a className="navbar-brand fw-bold fs-3" href="#home">
          Nex<span>Geda</span>
        </a>

        {/* Right side container - Formatted to lock to the far right on large screens */}
        <div className="d-flex align-items-center gap-2 order-lg-last">
          {/* Sign In - Visually swapped so it sits on the absolute edge */}
          <a href="#signin" className="signin-btn px-3 order-1 order-lg-last">
            Sign In
          </a>

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

export default Header;
