import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../App";
import "./Founder.css";
import { Link } from "react-router-dom";
function Founder() {
  const [founder, setFounder] = useState(null);

  useEffect(() => {
    const fetchFounder = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/founder`,
        );

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

  return (
    <>
      {/* ==============================
          FOUNDER
      ============================== */}
      <section className=" home-founder">
        <div className="container">
          {/* Heading */}
          <div className="row justify-content-center text-center mb-5">
            <div className="col-12 col-lg-8">
              <div className="home-founder-label">
                <span></span>
                THE FOUNDER
                <span></span>
              </div>

              <h2 className="home-founder-title">
                The person behind <span>NexGeda.</span>
              </h2>

              <p className="home-founder-intro">
                Meet the person shaping the vision behind NexGeda and its
                mission to empower the next generation through technology.
              </p>
            </div>
          </div>

          {/* Founder Card */}
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="home-founder-card">
                <div className="row align-items-center g-5">
                  {/* Image */}
                  <div className="col-12 col-md-4 text-center">
                    <div className="home-founder-image">
                      {founder?.avatar ? (
                        <img src={founder.avatar} alt={founder.name} />
                      ) : (
                        <i className="bi bi-person"></i>
                      )}
                    </div>
                  </div>

                  {/* Information */}
                  <div className="col-12 col-md-8">
                    <span className="home-founder-role">
                      FOUNDER & DIRECTOR
                    </span>

                    <h3 className="home-founder-name">
                      {founder?.name || "Loading..."}
                    </h3>

                    <p className="home-founder-bio">
                      {founder?.bio ||
                        "Building a technology learning environment where creativity, practical skills and innovation come together."}
                    </p>

                    <div className="home-founder-line"></div>

                    <div className="home-founder-quote">
                      <i className="bi bi-quote"></i>

                      <p>
                        Empowering people with the skills to turn ideas into
                        technology.
                      </p>
                    </div>

                    <Link to="/About" className="founder-link">
                      Learn more about NexGeda
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================
          CTA
      ============================== */}
      <section className="my-5 mx-5 home-cta">
        <div className="container">
          <div className="home-cta-content text-center">
            <span className="home-cta-label">START YOUR JOURNEY</span>

            <h2>
              Your future in <strong>technology</strong> starts here.
            </h2>

            <p>Learn. Build. Grow with NexGeda.</p>

            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link to="/Signup" className="home-cta-button">
                Register Now
                <i className="bi bi-arrow-right"></i>
              </Link>

              <Link to="/Scholarship" className="home-cta-outline">
                View Scholarship
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Founder;
