import React, { useState } from "react";
import "./Contact.css";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../config";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(`${BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setStatus("Your message has been sent successfully.");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact error:", error);
      setStatus("Unable to send your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="my-5 contact-section" id="contact">
      <div className="container">
        {/* HEADER */}
        <div className="mb-2 row justify-content-center text-center">
          <div className="col-12 col-lg-8">
            <div className="contact-label">
              <span></span>
              GET IN TOUCH
              <span></span>
            </div>

            <h2 className="contact-title">
              Let's <span>connect.</span>
            </h2>

            <p className="contact-intro">
              Have a question about NexGeda ,our courses or scholarship
              opportunities ? We'd love to hear from you.
            </p>
          </div>
        </div>

        {/* CONTACT CONTENT */}
        <div className="row g-5 contact-content">
          {/* CONTACT INFORMATION */}
          <div className="col-12 col-lg-5">
            <div className="contact-info">
              <span className="info-label">CONTACT NEXGEDA</span>

              <h3>
                Let's start a
                <br />
                <span>conversation.</span>
              </h3>

              <p className="info-text">
                Whether you want to join a course, ask about our programs, or
                simply learn more about NexGeda, we're ready to help.
              </p>

              {/* DIRECT CHANNEL */}
              <div className="contact-group">
                <h5>DIRECT CHANNEL</h5>

                <a href="firaolnegewo8@gmail.com" className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-envelope"></i>
                  </div>

                  <div>
                    <small>Email</small>
                    <strong>firaolnegewo8@gmail.com</strong>
                  </div>
                </a>

                <a href="tel:+251935568164" className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-telephone"></i>
                  </div>

                  <div>
                    <small>Phone</small>
                    <strong>+251 935 568 164</strong>
                  </div>
                </a>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="bi bi-geo-alt"></i>
                  </div>

                  <div>
                    <small>Location</small>
                    <strong>Ethiopia</strong>
                  </div>
                </div>
              </div>

              {/* SOCIAL */}
              <div className="contact-group">
                <h5>SOCIAL PRESENCE</h5>

                <div className="social-links">
                  <a href="#" aria-label="Telegram">
                    <i className="bi bi-telegram"></i>
                  </a>

                  <a href="#" aria-label="Facebook">
                    <i className="bi bi-facebook"></i>
                  </a>

                  <a href="#" aria-label="Instagram">
                    <i className="bi bi-instagram"></i>
                  </a>

                  <a href="#" aria-label="TikTok">
                    <i className="bi bi-tiktok"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="col-12 col-lg-7">
            <div className="contact-form-card">
              <div className="form-header">
                <span>HAVE A QUESTION?</span>

                <h3>
                  Send us a <strong>message.</strong>
                </h3>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  {/* NAME */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="name">Your Name</label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* EMAIL */}
                  <div className="col-12 col-md-6">
                    <label htmlFor="email">Email Address</label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* SUBJECT */}
                  <div className="col-12">
                    <label htmlFor="subject">Subject</label>

                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="What would you like to discuss?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* MESSAGE */}
                  <div className="col-12">
                    <label htmlFor="message">Message</label>

                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Write your message..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  {/* STATUS */}
                  {status && (
                    <div className="col-12">
                      <div className="contact-status">{status}</div>
                    </div>
                  )}

                  {/* BUTTON */}
                  <div className="col-12">
                    <button
                      type="submit"
                      className="contact-submit"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}

                      {!loading && <i className="bi bi-arrow-right"></i>}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      
     
     
      </div>
    </section>
  );
}

export default Contact;
