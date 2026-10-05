import React, { useEffect, useState } from "react";
import "./About.css";

function About() {
  const [founder, setFounder] = useState(null);

  useEffect(() => {
    const fetchFounder = async () => {
      try {
        const response = await fetch("http://localhost:2123/api/founder");

        if (!response.ok) {
          throw new Error("Failed to fetch founder");
        }

        setFounder(await response.json());
      } catch (error) {
        console.error("Founder fetch error:", error);
      }
    };

    fetchFounder();
  }, []);

  const learningAreas = [
    {
      number: "01",
      icon: "bi-code-slash",
      title: "Full-Stack Development",
      text: "Build complete web applications by learning frontend, backend, databases and APIs.",
      tags: ["Frontend", "Backend", "Database"],
    },
    {
      number: "02",
      icon: "bi-phone",
      title: "Mobile Development",
      text: "Turn ideas into modern mobile applications and learn how applications connect with real systems.",
      tags: ["Mobile Apps", "APIs", "Projects"],
    },
    {
      number: "03",
      icon: "bi-bezier2",
      title: "UI / UX Design",
      text: "Design intuitive digital experiences with a strong focus on users, interfaces and usability.",
      tags: ["UI Design", "UX Design", "Prototype"],
    },
  ];

  const approach = [
    ["bi-lightning-charge-fill", "Learn", "Understand modern technology."],
    ["bi-code-square", "Build", "Turn knowledge into projects."],
    ["bi-rocket-takeoff-fill", "Lead", "Create your own future."],
  ];

  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* INTRO */}
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-9">
            <div className="about-label">
              <span></span>
              ABOUT NEXGEDA
              <span></span>
            </div>

            <h2 className="about-title">
              Building the <span>next generation</span> of technology leaders.
            </h2>

            <p className="about-intro">
              NexGeda is a technology academy focused on helping aspiring
              developers and designers turn ideas into real digital products.
            </p>

            <p className="about-text">
              Through practical learning, hands-on projects and modern
              technologies, we help learners develop the skills and confidence
              needed to build, create and lead in the digital world.
            </p>
          </div>
        </div>

        {/* LEARNING AREAS */}
        <div className="row g-4 mt-5">
          {learningAreas.map((area) => (
            <div className="col-12 col-md-6 col-lg-4" key={area.number}>
              <div className="learning-card h-100">
                <div className="d-flex justify-content-between">
                  <div className="learning-icon">
                    <i className={`bi ${area.icon}`}></i>
                  </div>

                  <span className="learning-number">{area.number}</span>
                </div>

                <h3>{area.title}</h3>

                <p>{area.text}</p>

                <div className="learning-tags">
                  {area.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* APPROACH */}
        <div className="row align-items-center g-5 approach-section">
          <div className="col-12 col-lg-6">
            <span className="section-label">THE NEXGEDA APPROACH</span>

            <h2 className="approach-title">
              Learn by <span>building.</span>
            </h2>

            <p className="about-text">
              At NexGeda, learning technology goes beyond watching tutorials or
              memorizing concepts. We believe the best way to learn is to
              create.
            </p>

            <p className="about-text">
              Learners are encouraged to experiment, solve problems, work on
              projects and transform their knowledge into practical solutions.
            </p>

            <div className="row g-3 mt-4">
              {approach.map(([icon, title, text]) => (
                <div className="col-12 col-sm-4" key={title}>
                  <div className="approach-item">
                    <i className={`bi ${icon}`}></i>
                    <h5>{title}</h5>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VISUAL */}
          <div className="col-12 col-lg-6">
            <div className="about-visual">
              <div className="visual-grid"></div>

              <div className="visual-content">
                <span>✦</span>

                <h3>
                  Learn.
                  <br />
                  <strong>Build.</strong>
                  <br />
                  Lead.
                </h3>

                <p>NEXGEDA ACADEMY</p>
              </div>

              <div className="code-box">
                <span>const</span> future = <strong>"NexGeda"</strong>;
              </div>
            </div>
          </div>
        </div>

        {/* FOUNDER */}
        <div className="founder-section">
          <div className="text-center mb-5">
            <div className="about-label">
              <span></span>
              THE FOUNDER
              <span></span>
            </div>

            <h2 className="founder-title">
              The person behind <span>NexGeda.</span>
            </h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="founder-card">
                <div className="row align-items-center g-5">
                  <div className="col-12 col-md-4 text-center">
                    <div className="founder-image">
                      {founder?.avatar ? (
                        <img src={founder.avatar} alt={founder.name} />
                      ) : (
                        <i className="bi bi-person"></i>
                      )}
                    </div>
                  </div>

                  <div className="col-12 col-md-8">
                    <span className="founder-role">FOUNDER & DIRECTOR</span>

                    <h3 className="founder-name">
                      {founder?.name || "Loading..."}
                    </h3>

                    <p className="founder-bio">
                      {founder?.bio ||
                        "Building a technology learning environment where creativity, practical skills and innovation come together."}
                    </p>

                    <div className="founder-line"></div>

                    <div className="founder-quote">
                      <i className="bi bi-quote"></i>

                      <span>
                        Empowering people with the skills to turn ideas into
                        technology.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="about-cta text-center">
          <span>START YOUR JOURNEY</span>

          <h2>
            Your future in <strong>technology</strong> starts here.
          </h2>

          <p>Learn. Build. Grow with NexGeda.</p>

          <button className="btn cta-button">
            Explore Our Courses
            <i className="bi bi-arrow-right ms-2"></i>
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
