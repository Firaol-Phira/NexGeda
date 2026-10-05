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

  // Get major courses
  useEffect(() => {
    const getCourses = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(`${API}/api/courses`);

        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();

        console.log("Courses:", data);
        setCourses(data);
      } catch (error) {
        console.error("Course fetch error:", error);
        setError("Cannot connect to the course server.");
      } finally {
        setLoading(false);
      }
    };

    getCourses();
  }, []);

  // Get minor courses
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

      console.log("Minor courses:", data);
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
    if (title.includes("Full-Stack")) return "bi-code-slash";
    if (title.includes("Mobile")) return "bi-phone";
    if (title.includes("UI/UX")) return "bi-palette";

    return "bi-book";
  };

  return (
    <section className="container course-section">
      {/* TITLE */}
      <div className="text-center my-4">
        <h2 className=" course-title">
          My <span>Courses</span>
        </h2>

        <p className="text-muted">Choose a program and start learning.</p>
      </div>

      {/* LOADING */}
      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border text-danger"></div>
          <p className="text-muted mt-2">Loading courses...</p>
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
      {!loading && !error && (
        <div className="row g-4">
          {courses.map((course) => (
            <div className="col-12 col-md-6 col-xl-4" key={course.course_id}>
              <div className="course-card h-100 p-4">
                <div className="course-icon">
                  <i className={`bi ${getIcon(course.title)}`}></i>
                </div>

                <h5 className="fw-bold mt-3">{course.title}</h5>

                <p className="text-muted small">{course.description}</p>

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
          <p className="mt-2">No courses found.</p>
        </div>
      )}

      {/* OVERLAY */}
      {selected && <div className="course-overlay" onClick={closeCourse}></div>}

      {/* SLIDE PANEL */}
      <div className={`course-panel ${selected ? "show" : ""}`}>
        {/* PANEL HEADER */}
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

        {/* MINOR LOADING */}
        {minorLoading && (
          <div className="text-center py-4">
            <div className="spinner-border text-danger"></div>
          </div>
        )}

        {/* MINOR COURSES */}
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
