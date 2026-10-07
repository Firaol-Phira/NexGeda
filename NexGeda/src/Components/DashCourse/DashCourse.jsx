import React, { useEffect, useState } from "react";
import "./DashCourse.css";

const API = "http://localhost:2123";

function DashCourse() {
  const [courses, setCourses] = useState([]);
  const [selected, setSelected] = useState(null);
  const [minorCourses, setMinorCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [minorLoading, setMinorLoading] = useState(false);
  const [error, setError] = useState("");

  // ==========================================
  // GET ONLY THE LOGGED-IN STUDENT'S COURSE
  // ==========================================

  useEffect(() => {
    const getStudentCourses = async () => {
      try {
        setLoading(true);
        setError("");

        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
          setError("No user session found. Please sign in.");
          setLoading(false);
          return;
        }

        const userObj = JSON.parse(storedUser);
        const studentId = userObj?.id;

        if (!studentId) {
          setError("Invalid user session. Please sign in again.");
          setLoading(false);
          return;
        }

        const response = await fetch(
          `${API}/api/students/${studentId}/courses`,
        );

        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Course fetch error:", error);
        setError("Cannot load your assigned courses.");
      } finally {
        setLoading(false);
      }
    };

    getStudentCourses();
  }, []);

  // ==========================================
  // GET MINOR COURSES
  // ==========================================

  const openCourse = async (course) => {
    setSelected(course);
    setMinorCourses([]);
    setMinorLoading(true);

    try {
      const response = await fetch(
        `${API}/api/courses/${course.course_id}/minor-courses`,
      );

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      setMinorCourses(data);
    } catch (error) {
      console.error("Minor course error:", error);
    } finally {
      setMinorLoading(false);
    }
  };

  const closeCourse = () => {
    setSelected(null);
    setMinorCourses([]);
  };

  const getIcon = (title) => {
    if (!title) return "bi-book";
    if (title.includes("Full-Stack")) return "bi-code-slash";
    if (title.includes("Mobile")) return "bi-phone";
    if (title.includes("UI/UX")) return "bi-palette";

    return "bi-book";
  };

  return (
    <section className="container course-section">
      {/* TITLE */}
      <div className="text-center my-4">
        <h2 className="course-title">
          My <span>Courses</span>
        </h2>
        <p className="text-muted">Your enrolled academic program.</p>
      </div>

      {/* LOADING */}
      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border text-danger"></div>
          <p className="text-muted mt-2">Loading your courses...</p>
        </div>
      )}

      {/* ERROR */}
      {!loading && error && (
        <div className="alert alert-danger">
          <i className="bi bi-exclamation-circle me-2"></i>
          {error}
        </div>
      )}

      {/* COURSES */}
      {!loading && !error && courses.length > 0 && (
        <div className="row g-4 justify-content-center">
          {courses.map((course) => (
            <div className="col-12 col-md-8 col-xl-6" key={course.course_id}>
              <div className="course-card h-100 p-4">
                <div className="course-icon">
                  <i className={`bi ${getIcon(course.title)}`}></i>
                </div>

                <h5 className="fw-bold mt-3">{course.title}</h5>

                <p className="text-muted small">{course.description}</p>

                <div className="mb-3">
                  {course.payment_status === "paid" ? (
                    <span className="badge bg-success">
                      <i className="bi bi-check-circle me-1"></i>
                      Paid
                    </span>
                  ) : (
                    <span className="badge bg-warning text-dark">
                      <i className="bi bi-clock me-1"></i>
                      Payment Pending
                    </span>
                  )}
                </div>

                <button
                  className="btn access-btn w-100 mt-2"
                  onClick={() => openCourse(course)}
                >
                  Show more
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* NO COURSES */}
      {!loading && !error && courses.length === 0 && (
        <div className="text-center text-muted py-5">
          <i className="bi bi-book fs-1"></i>
          <p className="mt-2">You are not enrolled in any courses yet.</p>
        </div>
      )}

      {/* OVERLAY */}
      {selected && <div className="course-overlay" onClick={closeCourse}></div>}

      {/* SLIDE PANEL */}
      <div className={`course-panel ${selected ? "show" : ""}`}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <small className="text-muted">Course Program</small>
            <h5 className="fw-bold mb-0">{selected?.title}</h5>
          </div>

          <button className="btn close-btn" onClick={closeCourse}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <p className="text-muted small">{selected?.description}</p>

        <hr />

        <h6 className="fw-bold mb-3">Courses</h6>

        {minorLoading && (
          <div className="text-center py-4">
            <div className="spinner-border text-danger"></div>
          </div>
        )}

        {!minorLoading && (
          <div className="d-flex flex-column gap-2">
            {minorCourses.map((course, index) => (
              <div className="minor-course" key={course.minor_course_id}>
                <span className="number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h6>{course.title}</h6>
                  <p>{course.description}</p>

                  <button className="btn btn-sm minor-btn">
                    Start Course
                    <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default DashCourse;
