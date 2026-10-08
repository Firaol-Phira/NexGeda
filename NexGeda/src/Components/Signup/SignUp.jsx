import React, { useState } from "react";
"react-router-dom";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { BASE_URL } from "../../config";
import "./SignUp.css"; // Dedicated styles for this theme configuration

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect");
  // Feedback states for backend data communication pipelines
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch(`${BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

 if (response.ok) {
   setSuccessMessage("Account created successfully! Redirecting to login...");

   setUsername("");
   setEmail("");
   setPassword("");

   setTimeout(() => {
     navigate(
       redirect
         ? `/SignIn?redirect=${encodeURIComponent(redirect)}`
         : "/SignIn",
     );
   }, 2000);
 } else {
   setErrorMessage(
     data.message || "Registration failed. Please check your data.",
   );
 }
    } catch (err) {
      setErrorMessage(
        "Cannot connect to server. Ensure your backend is running on port 2123.",
      );
      console.error("Network connection failure:", err);
    }
  };

  return (
    <div className="nexgeda-page-wrapper min-vh-100 d-flex flex-column bg-white text-dark">
      {/* TOP NAVIGATION HEADER LAYER */}

      {/* CORE WORKSPACE ENTRY GRID LAYOUT */}
      <main className="container-fluid flex-grow-1 p-0 d-flex flex-column flex-md-row">
        <div className="row g-0 w-100 flex-grow-1">
          {/* LEFT SIDE WELCOME BLOCK WITH SHADOW TEXT OVERLAY */}
          <section className="col-12 col-md-6 d-none d-md-flex align-items-center justify-content-center text-center nexgeda-signup-banner position-relative">
            <div className="banner-dark-overlay position-absolute w-100 h-100 top-0 start-0"></div>
            <div className="banner-text-content position-relative p-4 text-white">
              <h1 className="display-4 fw-bold mb-3">Welcome Back</h1>
              <p className="fs-5 text-opacity-75">
                Login to continue your NexGeda learning journey
              </p>
            </div>
          </section>

          {/* RIGHT SIDE ACCOUNT CREATION DATA FORM PANEL */}
          <section className="col-12 col-md-6 d-flex align-items-center justify-content-center p-4 p-sm-5 bg-white">
            <div
              className="form-content-box w-100"
              style={{ maxWidth: "420px" }}
            >
              <h2 className="h3 fw-bold mb-4 text-start login-header-title">
                Create your Account
              </h2>

              {/* Network response warning alerts */}
              {errorMessage && (
                <div className="alert alert-danger py-2 fs-7 mb-3" role="alert">
                  {errorMessage}
                </div>
              )}
              {successMessage && (
                <div
                  className="alert alert-success py-2 fs-7 mb-3"
                  role="alert"
                >
                  {successMessage}
                </div>
              )}

              {/* Google Integrated Account Sign Up Trigger */}
              <button
                type="button"
                className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2 py-2 mb-3 google-register-btn text-dark fw-normal"
              >
                <svg
                  xmlns="http://w3.org"
                  width="16"
                  height="16"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.5 24c0-1.61-.15-3.16-.42-4.69H24v8.89h12.66c-.55 2.92-2.19 5.39-4.66 7.05l7.25 5.62c4.24-3.91 6.75-9.67 6.75-16.87z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.54 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.98-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.25-5.62c-2.01 1.35-4.58 2.18-8.64 2.18-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                </svg>
                Sign in with Google
              </button>

              {/* Divider Component Element */}
              <div className="d-flex align-items-center my-3 text-muted text-uppercase fs-7 structural-separator">
                <span className="px-3 bg-white text-secondary">OR</span>
              </div>

              {/* Core Registration Execution Inputs Form */}
              <form onSubmit={handleSignUpSubmit}>
                {/* 1. Username Field Input block */}
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control form-control-lg border border-secondary border-opacity-50 input-custom-box shadow-none"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>

                {/* 2. Email Address Field Input block */}
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg border border-secondary border-opacity-50 input-custom-box shadow-none"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* 3. Password Secure Entry Field with Mask reveal icon toggle */}
                <div className="mb-4 position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control form-control-lg border border-secondary border-opacity-50 input-custom-box pe-5 shadow-none"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="position-absolute end-0 top-50 translate-middle-y border-0 bg-transparent text-muted me-3 d-flex align-items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i
                      className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"} fs-5`}
                    ></i>
                  </button>
                </div>

                {/* Action Submission Request Execution Button */}
                <button
                  type="submit"
                  className="btn btn-dark w-100 py-2.5 fw-bold fs-5 nexgeda-action-btn shadow-sm"
                >
                  Sign up
                </button>
              </form>

              {/* Alternate navigation pathway router links */}
              <div className="text-center mt-4 text-muted fs-6">
                Already have an Account?{" "}
                <Link
                  to={
                    redirect
                      ? `/SignIn?redirect=${encodeURIComponent(redirect)}`
                      : "/SignIn"
                  }
                  className="text-danger text-decoration-none fw-bold ms-1 hover-underline"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default SignUp;
