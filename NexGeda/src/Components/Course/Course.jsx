import React, { useState } from "react";
import "./Course.css";

function Course() {
  // Track which card ID currently holds the active/hovered state.
  // Setting it to '1' makes the first card active by default on page load.
  const [activeCardId, setActiveCardId] = useState(1);

  const courses = [
    {
      id: 1,
      iconClass: "bi bi-cpu-fill",
      title: "Full-Stack Development",
      description:
        "Master both frontend user interfaces and backend database engines. Build scalable, secure web applications from scratch using modern frameworks and cloud deployment technologies.",
    },
    {
      id: 2,
      iconClass: "bi bi-phone-vibrate-fill",
      title: "Mobile App Development",
      description:
        "Design, build, and deploy native and cross-platform mobile apps for iOS and Android. Learn to integrate device hardware, APIs, and real-time data sync for seamless mobile experiences.",
    },
    {
      id: 3,
      iconClass: "bi bi-palette-fill",
      title: "UI/UX Product Design",
      description:
        "Transform ideas into beautiful, intuitive user experiences. Master user research, wireframing, interactive prototyping, and high-fidelity visual design using industry-standard design tools.",
    },
  ];

  return (
    <section className="py-5 bg-dark-brand nexgeda-courses-section">
      <div className="container">
        {/* Header Content */}
        <div className="text-center mb-5 max-w-700 mx-auto">
          <h2 className="fw-bold text-dark display-6 mb-3">
            What You'll Learn with{" "}
            <span className="brand-highlight">NexGeda</span> Technology Academy
          </h2>
          <p className="text-secondary lead fs-6">
            Master in-demand skills from technology to personal growth — all in
            one place.
          </p>
        </div>

        {/* Courses Responsive Grid Layout */}
        <div className="row g-4 justify-content-center align-items-stretch">
          {courses.map((course) => {
            const isActive = activeCardId === course.id;

            return (
              <div key={course.id} className="col-12 col-md-6 col-lg-4 d-flex">
                <div
                  className={`course-card card border-0 w-100 p-4 text-center d-flex flex-column align-items-center justify-content-start ${isActive ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveCardId(course.id)}
                >
                  {/* Circle Icon Wrapper */}
                  <div className="icon-wrapper d-flex align-items-center justify-content-center mb-4 rounded-circle shadow-sm">
                    <i className={`${course.iconClass} fs-3`}></i>
                  </div>

                  {/* Card Main Texts */}
                  <h3 className="h5 fw-bold text-dark mb-3 card-title">
                    {course.title}
                  </h3>
                  <p className="text-secondary card-description mb-0">
                    {course.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Course;
