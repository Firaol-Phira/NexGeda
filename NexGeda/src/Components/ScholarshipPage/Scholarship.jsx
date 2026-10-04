import React from "react";
import "./Scholarship.css";
import Scho from "../../assets/Scho.PNG"
function Scholarship() {
  return (
    <section className="scholarship-section py-5">
      <div className="container py-lg-5">
        <div className="row align-items-center g-5">
          <div className="scholarship-heading text-center">
            <h2>Scholarship Opportunity</h2>

            <div className="heading-decoration">
              <span></span>
              <i></i>
              <i></i>
              <span></span>
            </div>
          </div>
          {/* LEFT - SCHOLARSHIP IMAGE */}
          <div className="col-12 ">
            <div className="scholarship-image-wrapper">
              <img
                src={Scho}
                alt="NexGeda scholarship student"
                className="img-fluid scholarship-image"
              />
            </div>
          </div>

          {/* RIGHT - SCHOLARSHIP CONTENT */}
          <div className="col-12 col-lg-7">
            {/* SMALL LABEL */}
            <span className="scholarship-label">NEXGEDA SCHOLARSHIP</span>

            {/* MAIN TITLE */}
            <h2 className="scholarship-title mt-3">
              Empowering the Next
              <span> Generation</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="scholarship-description">
              NexGeda is committed to creating opportunities for students who
              are passionate about technology but may have limited access to
              quality technical education.
            </p>

            <p className="scholarship-description">
              Through our scholarship program, selected students can access
              practical technology training and develop the skills needed to
              build their future.
            </p>

            {/* INFORMATION CARDS */}
            <div className="scholarship-info mt-4">
              {/* WHO IS THIS FOR */}
              <div className="scholarship-card">
                <div className="scholarship-icon">
                  <i className="bi bi-question-lg"></i>
                </div>

                <div>
                  <h5>Who is this for?</h5>
                  <p>
                    This scholarship is designed for students in Ethiopia who
                    have a strong interest in technology and limited access to
                    learning opportunities.
                  </p>
                </div>
              </div>

              {/* HOW CAN I APPLY */}
              <div className="scholarship-card">
                <div className="scholarship-icon">
                  <i className="bi bi-list-ul"></i>
                </div>

                <div>
                  <h5>How can I apply?</h5>
                  <p>
                    Complete the scholarship application and provide the
                    required information before the application deadline.
                  </p>
                </div>
              </div>

              {/* WHEN CAN I APPLY */}
              <div className="scholarship-card">
                <div className="scholarship-icon">
                  <i className="bi bi-calendar-event"></i>
                </div>

                <div>
                  <h5>When can I apply?</h5>
                  <p>
                    Applications are accepted during the announced scholarship
                    registration period. Check the latest NexGeda announcement
                    for the current deadline.
                  </p>
                </div>
              </div>
            </div>

            {/* ACTION BUTTON */}
            <div className="mt-4">
              <button className="scholarship-btn">
                Apply for Scholarship
                <i className="bi bi-arrow-right ms-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Scholarship;
