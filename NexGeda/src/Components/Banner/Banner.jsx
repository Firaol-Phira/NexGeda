import React from "react";
import "./Banner.css";
// Option A: Import an image from your src folder assets
import NG from "../../assets/NG.jpg";

function Banner() {
  // Inline object styles to inject the imported asset path
  const heroBgStyle = {
    backgroundImage: `url(${NG})`,
  };

  return (
    <section id="home" className="home-hero-section" style={heroBgStyle}>
      <div className="hero-overlay"></div>

      {/* Main Structural Wrapper Container */}
      <div className="container hero-content-wrapper text-center">
        {/* Top Badging Accent */}
        <span className="badge-tech">Accelerate Your Future</span>

        {/* Hero Typography Stack */}
        <h1 className="mt-4 mb-4 hero-title mx-auto">
          Empowering The Next Generation of <span>Tech Leaders</span>
        </h1>

        <p className="hero-subtitle mx-auto">
          Master production-grade full-stack engineering, interface design, and
          scalable systems through hands-on labs at NexGeda.
        </p>

        {/* Action Button CTA Row */}
        <div className="hero-cta-group d-flex gap-3 justify-content-center mb-5">
          <a href="#academy" className="btn-primary-red">
            Explore Academy
          </a>
          <a href="#scholarship" className="btn-secondary-outline">
            Apply Now
          </a>
        </div>

        {/* 
          CORRECTED TERMINAL PLACEMENT: 
          Now safely nested inside the container matrix to force a true bottom-center stack line!
        */}
        <div className="row justify-content-center mt-5 pt-3">
          <div className="col-12 col-md-10 col-lg-8 hero-visual-box text-start">
            <div className="tech-dashboard-mockup shadow-lg">
              <div className="mockup-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="mockup-title">nexgeda-terminal ~/academy</span>
              </div>
              <div className="mockup-body">
                <p className="code-line">
                  <span className="code-keyword">const</span> nexGeda ={" "}
                  <span className="code-keyword">new</span> Academy();
                </p>
                <p className="code-line">
                  nexGeda.learnStack([
                  <span className="code-string">'Frontend'</span>,{" "}
                  <span className="code-string">'Backend'</span>,{" "}
                  <span className="code-string">'DevOps'</span>]);
                </p>
                <p className="code-line text-muted">
                  // Output: System Ready. Skills upgrading...
                </p>
                <p className="code-line blink-cursor">_</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        CLEANED SINGLE BANNER WAVE SEPARATOR:
        Duplicate layer code removed. Sits flush at the absolute base of the section component.
      */}
      <div className="banner-wave-separator">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M-20,35 A720,120 0 0,0 720,110 A720,120 0 0,0 1460,35 L1460,120 L-20,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}

export default Banner;
