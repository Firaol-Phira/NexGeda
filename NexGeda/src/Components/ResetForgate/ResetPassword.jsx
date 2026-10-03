import React, { useState } from "react";
import "./ResetPassword.css";

function ResetPassword(){
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Resetting password for:", email);
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <main className="d-flex flex-grow-1 flex-column flex-md-row">
        {/* Right Side: NexGeda Brand Asset Section */}
        <section className="col-12 col-md-6 brand-visual-section d-none d-md-flex align-items-center p-5 position-relative">
          <div className="visual-overlay position-absolute top-0 start-0 w-100 h-100"></div>

          <div className="position-relative z-1 text-white p-lg-4">
            <div className="text-brand-red display-4 mb-3">✦</div>
            <h2 className="fw-bold display-5 mb-4 max-w-sm">
              Empowering Tech Minds 
            </h2>

            {/* Social Proof */}
            <div className="d-flex align-items-center gap-3 mt-5">
              <div className="d-flex">
                <div className="avatar-circle av-1"></div>
                <div className="avatar-circle av-2"></div>
                <div className="avatar-circle av-3"></div>
                <div className="avatar-circle av-4"></div>
              </div>
              <span className="fw-medium text-light opacity-75">
                Join 40,000+ users
              </span>
            </div>
          </div>
        </section>
        {/* Left Side: Form */}
        <section className="col-12 col-md-5 d-flex align-items-center justify-content-center p-4 p-lg-5">
          <div className="w-100" style={{ maxWidth: "400px" }}>
            <h1 className="fw-bold mb-4 text-dark display-6">
              Reset Your Password
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label fw-medium text-secondary small"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg bg-light border"
                  id="email"
                  placeholder="Enter your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-brand-red w-100 btn-lg fw-semibold text-white mt-2"
              >
                Reset
              </button>
            </form>

            <div className="mt-4 small d-flex flex-column gap-2">
              <p className="m-0 text-muted">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-brand-red text-decoration-none fw-medium link-hover"
                >
                  Log in
                </a>
              </p>
              <p className="m-0 text-muted">
                Don't have an account?{" "}
                <a
                  href="/signup"
                  className="text-brand-red text-decoration-none fw-medium link-hover"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ResetPassword;
