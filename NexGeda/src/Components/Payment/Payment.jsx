import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Payment.css";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../config";

function Payment() {
  const API = `${BASE_URL}`;
  const { courseId } = useParams();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API}/api/courses`)
      .then((res) => res.json())
      .then((data) => {
        const selectedCourse = data.find(
          (course) => Number(course.course_id) === Number(courseId),
        );

        setCourse(selectedCourse);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [courseId]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-danger"></div>
      </div>
    );
  }

  if (!course) {
    return <p className="text-center py-5">Course not found.</p>;
  }

  return (
    <section className="payment-page py-5">
      <div className="container">
        {/* TITLE */}

        <div className="text-center mb-4">
          <div className="payment-label">
            <span></span>
            NEXGEDA ACADEMY
            <span></span>
          </div>

          <h2 className="payment-title">
            Complete Your <span>Payment</span>
          </h2>

          <p className="payment-subtitle">
            Follow the instructions to complete your registration.
          </p>
        </div>

        {/* PAYMENT CARD */}

        <div className="payment-card mx-auto">
          {/* COURSE */}

          <div className="course-header">
            <div>
              <small>SELECTED COURSE</small>

              <h3>{course.title}</h3>
            </div>
          </div>
          <div className="price">
            <div className="course-price">
              {" "}
              <br />
              <h5>Material + Class</h5>
              {Number(course.class_price).toLocaleString()}
              <span> Birr</span>
            </div>

            <div className="course-price">
              <br />
              <h5>Material access only</h5>
              {Number(course.material_price).toLocaleString()}
              <span> Birr</span>
            </div>
          </div>

          <hr />

          {/* PAYMENT */}

          <h5>Payment Information</h5>

          <div className="payment-account">
            <div>
              <small>PAYMENT METHOD</small>
              <strong>Telebirr</strong>
            </div>

            <div>
              <small>ACCOUNT</small>
              <strong>0935568164</strong>
            </div>

            <div>
              <small>NAME</small>
              <strong>Firaol Negewo</strong>
            </div>
          </div>

          {/* INSTRUCTIONS */}

          <div className="instructions mt-4">
            <p>
              <span>1</span>
              Send the amount above to the payment account.
            </p>

            <p>
              <span>2</span>
              Take a screenshot of your successful payment.
            </p>

            <p>
              <span>3</span>
              Send the screenshot to our manager on Telegram.
            </p>
          </div>

          {/* BUTTON */}

          <Link
            to="https://t.me/@fira21723"
            target="_blank"
            rel="noopener noreferrer"
            className="send-screenshot"
          >
            <i className="bi bi-telegram me-2"></i>
            Send Screenshot
          </Link>

          <p className="payment-note">
            <i className="bi bi-info-circle me-1"></i>
            Your course will be activated after payment confirmation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Payment;
