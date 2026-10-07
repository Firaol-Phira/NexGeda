import React from "react";
import "./Why.css";
import { Link } from "react-router-dom";
const reasons = [
  {
    icon: "bi-lightning-charge-fill",
    number: "01",
    title: "Learn by Doing",
    text: "Turn knowledge into real skills through practical projects and hands-on learning.",
  },
  {
    icon: "bi-diagram-3-fill",
    number: "02",
    title: "Build Real Skills",
    text: "Develop technical abilities that prepare you to create real digital products.",
  },
  {
    icon: "bi-person-check-fill",
    number: "03",
    title: "Learn with Guidance",
    text: "Get direction and support throughout your learning journey.",
  },
  {
    icon: "bi-rocket-takeoff-fill",
    number: "04",
    title: "Grow with Purpose",
    text: "Build the mindset and skills needed to turn your potential into opportunities.",
  },
];

function WhyNexGeda() {
  return (
    <section className="why-nexgeda">
      {/* Header */}
      <div className="container py-5">
        <div className="row align-items-end g-4">
          <div className="col-lg-7">
            <span className="why-label">THE NEXGEDA DIFFERENCE</span>

            <h2 className="why-title mt-3">
              More than learning.
              <br />
              <span>It's about becoming.</span>
            </h2>
          </div>

          <div className="col-lg-5">
            <p className="why-intro mb-0">
              NexGeda combines practical technology education, creative thinking
              and guided learning to help you become a confident digital
              creator.
            </p>
          </div>
        </div>
      </div>

      {/* Dark Feature Section */}
      <div className="why-dark">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="why-feature">
                <div className="feature-icon">
                  <i className="bi bi-stars"></i>
                </div>

                <span className="feature-label">WHY NEXGEDA?</span>

                <h3>
                  Learn.
                  <br />
                  Build.
                  <br />
                  <span>Become.</span>
                </h3>

                <p>
                  We believe technology education should go beyond theory. At
                  NexGeda, you learn concepts, apply them to real projects, and
                  develop the confidence to solve real-world problems.
                </p>

                <div className="feature-tags">
                  <span>Technology</span>
                  <span>Creativity</span>
                  <span>Growth</span>
                </div>
              </div>
            </div>

            {/* Reasons */}
            <div className="col-lg-7">
              <div className="row g-3">
                {reasons.map((reason) => (
                  <div className="col-md-6" key={reason.number}>
                    <div className="reason-card h-100">
                      <div className="reason-top">
                        <div className="reason-icon">
                          <i className={`bi ${reason.icon}`}></i>
                        </div>

                        <span className="reason-number">{reason.number}</span>
                      </div>

                      <h4>{reason.title}</h4>

                      <p>{reason.text}</p>

                      <div className="reason-arrow">
                        <i className="bi bi-arrow-up-right"></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="container py-5">
        <div className="why-bottom">
          <div>
            <span>READY TO START?</span>

            <h4>Build your future with NexGeda.</h4>
          </div>

          <Link to="/Academy" className="why-btn">
            Explore Courses
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WhyNexGeda;
