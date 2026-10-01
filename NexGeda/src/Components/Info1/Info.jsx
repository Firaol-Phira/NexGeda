import React from "react";
import "./Info.css";

function Info() {
  return (
    <div className="home-container">
      {/* 1. HERO SECTION */}
      <header className="hero-section">
        <div className="container">
          <div className="row align-items-center min-vh-75 pt-5">
            <div className="col-lg-6 hero-text-box">
              <span className="badge-tech">Accelerate Your Future</span>
              <h1 className="hero-title">
                Empowering The Next Generation of <span>Tech Leaders</span>
              </h1>
              <p className="hero-subtitle">
                Master production-grade full-stack engineering, interface
                design, and scalable system architecture through hands-on
                industry labs.
              </p>
              <div className="hero-cta-group">
                <a href="#academy" className="btn-primary-red">
                  Explore Academy
                </a>
                <a href="#scholarship" className="btn-secondary-outline">
                  Apply for Scholarship
                </a>
              </div>
            </div>
            <div className="col-lg-6 hero-visual-box">
              {/* This represents your interactive visual/code preview container */}
              <div className="tech-dashboard-mockup">
                <div className="mockup-header">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                  <span className="mockup-title">
                    nexgeda-terminal ~/academy
                  </span>
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
      </header>

      {/* 2. LIVE METRICS BAR (Ready for Backend API strings) */}
      <section className="metrics-bar">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-card">
              <h3 className="metric-number">1,240+</h3>
              <p className="metric-label">Active Engineers</p>
            </div>
            <div className="metric-card">
              <h3 className="metric-number">48</h3>
              <p className="metric-label">Core Tech Labs</p>
            </div>
            <div className="metric-card">
              <h3 className="metric-number">88%</h3>
              <p className="metric-label">Scholarship Rate</p>
            </div>
          </div>
        </div>
      </section>
      {/* 3. FEATURED COURSES SECTION */}
      <section id="academy" className="featured-courses">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">
              Explore Our <span>Academy Tracks</span>
            </h2>
            <p className="section-subtitle">
              Deep dive curriculum designed to take you from beginner to
              job-ready builder.
            </p>
          </div>
          <div className="row g-4 mt-2">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="course-card">
                <div className="course-badge">Full-Stack</div>
                <h4 className="course-title">Advanced Web Development</h4>
                <p className="course-desc">
                  Master React, Node.js, asynchronous database routing, and
                  cloud deployment engines.
                </p>
                <a href="#details" className="course-link">
                  View Track Details &rarr;
                </a>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-md-4">
              <div className="course-card">
                <div className="course-badge">Backend</div>
                <h4 className="course-title">System Architecture & APIs</h4>
                <p className="course-desc">
                  Build highly secure database structures, manage relational
                  data, and safely route dynamic content.
                </p>
                <a href="#details" className="course-link">
                  View Track Details &rarr;
                </a>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-md-4">
              <div className="course-card">
                <div className="course-badge">Design</div>
                <h4 className="course-title">UI/UX & Product Design</h4>
                <p className="course-desc">
                  Learn visual hierarchy, responsive canvas structures,
                  prototyping styles, and vector wireframing.
                </p>
                <a href="#details" className="course-link">
                  View Track Details &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SCHOLARSHIP BANNER */}
      <section id="scholarship" className="scholarship-banner">
        <div className="container">
          <div className="banner-wrapper">
            <div className="banner-content">
              <h3>Finances shouldn't block engineering excellence.</h3>
              <p>
                Apply for our fully funded development scholarships today and
                kickstart your industry career.
              </p>
            </div>
            <div className="banner-action">
              <a href="#apply" className="btn-primary-red">
                Apply For Funding
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Info;