import React, { useState } from "react";
import { Link,
   useNavigate, 
   useSearchParams} from "react-router-dom"; // Added useNavigate for dashboard routing
import "./Sign.css"; // Import the cleaned-up global style rules
import NG from "../../assets/NG.jpg";
import { BASE_URL } from "../../App";
function Sign() {
  const [searchParams] = useSearchParams();
 

  const redirect = searchParams.get("redirect");
  const [email, setEmail] = useState(""); // Track email state
  const [password, setPassword] = useState(""); // Track password state
  const [showPassword, setShowPassword] = useState(false);

  // New operational states for backend connection
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // New network submission handler linked to the Express backend port 2123
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear old warnings on submission retry

    try {
      const response = await fetch(`${BASE_URL}/api/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

if (response.ok) {
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));

  // Check whether the user came from Pay Now
if (response.ok) {
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));

  // Check whether the user came from Pay Now
  if (redirect) {
    const paymentMatch = redirect.match(/^\/Payment\/(\d+)$/);

    if (paymentMatch) {
      const courseId = paymentMatch[1];

      try {
        await fetch(`${BASE_URL}/api/user/course`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.token}`,
          },
          body: JSON.stringify({
            userId: data.user.id,
            courseId: courseId,
          }),
        });
      } catch (error) {
        console.error("Failed to save selected course:", error);
      }
    }

    navigate(redirect, { replace: true });
    return;
  }
if (data.user.role === "manager") {
  navigate("/Management", { replace: true });
  return;
}
  // Normal login
  if (data.user.payment_status === "paid") {
    navigate("/dashboard", { replace: true });
    return;
  }

  if (data.user.course_id) {
    navigate(`/Payment/${data.user.course_id}`, {
      replace: true,
    });
    return;
  }

  navigate("/Academy", { replace: true });
}

  // Normal login
  if (data.user.payment_status === "paid") {
    navigate("/dashboard", { replace: true });
    return;
  }

  if (data.user.course_id) {
    navigate(`/Payment/${data.user.course_id}`, {
      replace: true,
    });
    return;
  }

  navigate("/Academy", { replace: true });
} else {
  // Forward validation failure responses from the MySQL check logic
  setErrorMessage(data.message || "Invalid email or password connection.");
}
    } catch (err) {
      setErrorMessage(
        "Cannot reach server. Verify your backend is running on port 2123.",
      );
      console.error("Network error connecting to backend:", err);
    }
  };

  return (
    <div className="nexgeda-login-container min-vh-100 d-flex flex-column text-white">
      <main className="container-fluid flex-grow-1 p-0 d-flex flex-column flex-md-row">
        <div className="row g-0 w-100 flex-grow-1">
          {/* LEFT SIDE WELCOME BANNER */}
          <section className="col-12 col-md-6 col-lg-6 d-none d-md-flex align-items-center justify-content-center text-center nexgeda-left-banner position-relative">
            <div className="banner-text-content position-relative p-4">
              <h1 className="display-5 fw-bold mb-3">Welcome Back</h1>
              <p className="fs-5 text-sign">
                Login to continue your NexGeda learning journey
              </p>
            </div>
          </section>

          {/* RIGHT SIDE FORM SECTION */}
          <section className="col-12 col-md-6 col-lg-6 d-flex align-items-center justify-content-center p-4 p-sm-5">
            <div className="form-wrapper w-100" style={{ maxWidth: "420px" }}>
              <h2 className="h3 fw-bold mb-4">Login to your Account</h2>

              {/* Dynamic Warning Component Display Alert */}
              {errorMessage && (
                <div className="alert alert-danger py-2 fs-7 mb-3" role="alert">
                  {errorMessage}
                </div>
              )}

              {/* Google Sign In */}
              <button
                type="button"
                className="btn border-secondary w-100 d-flex align-items-center justify-content-center gap-2 py-2 mb-3 google-signin-btn"
              >
                <svg
                  xmlns="http://w3.org"
                  width="16"
                  height="16"
                  viewBox="0 0 48 48"
                  style={{ marginRight: "8px" }}
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

              {/* Separator Divider */}
              <div className="d-flex align-items-center my-3 text-secondary text-uppercase fs-7 form-separator">
                <span className="px-2">Or</span>
              </div>

              {/* Hooked Up Submission Form to backend workflow pipeline handler */}
              <form onSubmit={handleLoginSubmit}>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg border-secondary  "
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3 position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control form-control-lg border-secondary  pe-5"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="position-absolute end-0 top-50 translate-middle-y border-0 bg-transparent text-secondary me-3 d-flex align-items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <i
                      className={`bi ${showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"} fs-5`}
                    ></i>
                  </button>
                </div>

                {/* Custom Captcha Simulation */}
                <div className="d-flex justify-content-between align-items-center p-3 mb-3 border border-secondary rounded bg-dark-subtle">
                  <div className="form-check d-flex align-items-center gap-2">
                    <input
                      className="form-check-input m-0 custom-checkbox"
                      type="checkbox"
                      id="captchaCheck"
                      required
                    />
                    <label
                      className="form-check-label fs-6 text-white"
                      htmlFor="captchaCheck"
                    >
                      I'm not a robot
                    </label>
                  </div>
                  <div className="d-flex flex-column align-items-center text-center">
                    <i className="bi bi-shield-check text-info fs-4 mb-1"></i>
                    <span
                      style={{ fontSize: "9px" }}
                      className="text-secondary"
                    >
                      reCAPTCHA
                    </span>
                  </div>
                </div>

                <div className="text-end mb-4">
                  <Link
                    to="/ForgotePassword"
                    className="brand-red-text text-decoration-none fw-semibold fs-6"
                  >
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="Signin btn w-100 py-2.5 fw-bold fs-5"
                >
                  Sign in
                </button>
              </form>

              <div className="text-center mt-4 text-secondary">
                Don't have an Account?{" "}
                <Link
                  to={
                    redirect
                      ? `/SignUp?redirect=${encodeURIComponent(redirect)}`
                      : "/SignUp"
                  }
                  className="brand-red-text text-decoration-none fw-bold"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Sign;
