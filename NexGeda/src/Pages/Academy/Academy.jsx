import React, { useEffect, useState } from "react";
import "./Academy.css";
import { Link } from "react-router-dom";

const API = "http://localhost:2123";

function Academy() {
  const [courses, setCourses] = useState([]);
  const [selected, setSelected] = useState(null);
  const [minorCourses, setMinorCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [minorLoading, setMinorLoading] = useState(false);

  // Get major courses and prices
  useEffect(() => {
    fetch(`${API}/api/courses`)
      .then((res) => res.json())
      .then((data) => setCourses(data.slice(0, 3)))
      .catch((error) => console.error("Course error:", error))
      .finally(() => setLoading(false));
  }, []);

  // Get minor courses
  const openCourse = async (course) => {
    setSelected(course);
    setMinorLoading(true);

    try {
      const response = await fetch(
        `${API}/api/courses/${course.course_id}/minor-courses`,
      );

      if (!response.ok) {
        throw new Error("Failed to get minor courses");
      }

      const data = await response.json();
      setMinorCourses(data);
    } catch (error) {
      console.error("Minor course error:", error);
    } finally {
      setMinorLoading(false);
    }
  };

  const getIcon = (title) => {
    if (title.includes("Full-Stack")) return "bi-code-slash";
    if (title.includes("Mobile")) return "bi-phone";
    if (title.includes("UI/UX")) return "bi-bezier2";

    return "bi-book";
  };

  return (
    <section id="academy" className="academy-section">
      {/* INTRODUCTION */}
      <div className="container academy-intro text-center">
        <div className="academy-label">
          <span></span>
          NEXGEDA ACADEMY
          <span></span>
        </div>

        <h2>
          Learn, <span>Build</span> and Grow.
        </h2>

        <p>
          Develop practical technology skills through structured programs, real
          projects and guided learning.
        </p>
      </div>

      {/* ACADEMIC PROGRAMS */}
      <div className="container academy-programs">
        <div className="text-center mb-4">
          <h3>Academic Programs</h3>
          <p>Choose a program and start your learning journey.</p>
        </div>

        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-danger"></div>
          </div>
        ) : (
          /*
           * IMPORTANT:
           * program-list stays vertical at every screen size.
           */
          <div className="program-list">
            {courses.map((course, index) => (
              /*
               * ONE MAJOR COURSE
               * This wrapper always stays one full-width row.
               */
              <div className="program-card" key={course.course_id}>
                <div className="row align-items-center g-4">
                  {/* COURSE INFORMATION */}
                  <div className="col-12 col-md-7">
                    <div className="course-section">
                      <div className="program-top">
                        <div className="program-icon">
                          <i className={`bi ${getIcon(course.title)}`}></i>
                        </div>

                        <span>{String(index + 1).padStart(2, "0")}</span>
                      </div>

                      <h5>{course.title}</h5>

                      <p>{course.description}</p>

                      <button
                        className="explore-btn"
                        onClick={() => openCourse(course)}
                      >
                        Explore
                        <i className="bi bi-arrow-right ms-2"></i>
                      </button>
                    </div>
                  </div>

                  {/* PRICE SECTION */}
                  <div className="col-12 col-md-5">
                    <div className="price-section">
                      <div className="price-title">Course Pricing</div>

                      <div className="price-item">
                        <div>
                          <small>Material access only</small>
                          <strong>
                            {Number(course.material_price).toLocaleString()}{" "}
                            Birr
                          </strong>
                        </div>

                        <i className="bi bi-file-earmark-text"></i>
                      </div>

                      <div className="price-item class-price">
                        <div>
                          <small>Material + Class</small>
                          <strong>
                            {Number(course.class_price).toLocaleString()}{" "} Birr
                          </strong>
                        </div>

                        <i className="bi bi-person-video3"></i>
                      </div>
                      {/* PAY NOW */}
                      <Link to="/payment" className="pay-now-btn">
                        Pay Now
                        <i className="bi bi-credit-card ms-2"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* LEARNING PATH */}
      <div className="container learning-path">
        <div className="text-center mb-4">
          <h3>Learning Path</h3>
          <p>Learn, practice, build and grow.</p>
        </div>

        <div className="row g-4">
          <div className="col-12 col-md-3">
            <div className="path-card">
              <span>01</span>
              <h5>Learn</h5>
              <p>Build your foundation and understand the basics.</p>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="path-card">
              <span>02</span>
              <h5>Practice</h5>
              <p>Improve your skills through practical exercises.</p>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="path-card">
              <span>03</span>
              <h5>Build</h5>
              <p>Create real projects and gain experience.</p>
            </div>
          </div>

          <div className="col-12 col-md-3">
            <div className="path-card">
              <span>04</span>
              <h5>Grow</h5>
              <p>Prepare for your career and future opportunities.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="container">
        <div className="academy-cta text-center">
          <h3>Ready to Start Your Journey?</h3>

          <p>Register with NexGeda and start learning today.</p>

          <Link to="/register" className="register-btn">
            Register Now
            <i className="bi bi-arrow-right ms-2"></i>
          </Link>
        </div>
      </div>

      {/* OVERLAY */}
      {selected && (
        <div className="course-overlay" onClick={() => setSelected(null)}></div>
      )}

      {/* MINOR COURSE PANEL */}
      <div className={`course-panel ${selected ? "show" : ""}`}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <small>ACADEMIC PROGRAM</small>
            <h5>{selected?.title}</h5>
          </div>

          <button className="close-btn" onClick={() => setSelected(null)}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <p>{selected?.description}</p>

        <hr />

        <h6>Courses</h6>

        {minorLoading ? (
          <div className="text-center py-4">
            <div className="spinner-border text-danger"></div>
          </div>
        ) : (
          <div>
            {minorCourses.map((course, index) => (
              <div className="minor-course" key={course.minor_course_id}>
                <span>{String(index + 1).padStart(2, "0")}</span>

                <div>
                  <h6>{course.title}</h6>

                  <p>{course.description}</p>

                  <Link to="/register" className="register-course">
                    Register First
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Academy;
