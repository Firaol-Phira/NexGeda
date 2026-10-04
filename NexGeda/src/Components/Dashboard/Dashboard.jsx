import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import logo from "../../assets/NexGedalogo2-04.png";

function Dashboard() {
  const [students, setStudents] = useState([]);
  const [activeMenu, setActiveMenu] = useState("Overview");
  const [loadingError, setLoadingError] = useState("");

  const [currentUser, setCurrentUser] = useState({
    name: "Loading...",
    email: "",
    avatar: "",
  });

  // Load user and students
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setCurrentUser(parsedUser);
      } catch (error) {
        console.error("Failed to parse user session:", error);
      }
    }

    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:2123/api/students");

        if (!response.ok) {
          throw new Error("Server rejected data request");
        }

        const data = await response.json();
        setStudents(data);
      } catch (error) {
        console.error("Database fetch error:", error);

        setLoadingError(
          "Could not populate student profiles from database layer.",
        );
      }
    };

    fetchStudents();
  }, []);

  // Profile image upload
  const handleAvatarFileChange = async (e) => {
    const fileBlob = e.target.files[0];

    if (!fileBlob) return;

    const formData = new FormData();
    formData.append("avatar", fileBlob);

    const token = localStorage.getItem("token");

    try {
      const response = await fetch(
        "http://localhost:2123/api/user/update-avatar",
        {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json();

      if (response.ok) {
        alert("Profile picture updated successfully!");

        const updatedUser = {
          ...currentUser,
          avatar: data.avatarPath,
        };

        localStorage.setItem("user", JSON.stringify(updatedUser));
        setCurrentUser(updatedUser);

        window.location.reload();
      } else {
        alert(data.message || "Could not update profile picture.");
      }
    } catch (error) {
      console.error("Network upload error:", error);

      alert(
        "Could not update profile picture due to server connection failure.",
      );
    }
  };

  // Get initials
  const getInitials = (name) => {
    if (!name || name === "Loading...") {
      return "U";
    }

    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // Logout
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/Signin";
  };

  // Sidebar menu
  const menuItems = [
    {
      name: "Overview",
      icon: "bi-grid-1x2-fill",
    },
    {
      name: "Courses",
      icon: "bi-journal-bookmark-fill",
    },
    {
      name: "Schedule",
      icon: "bi-calendar3",
    },
    {
      name: "Discussion",
      icon: "bi-chat-left-text-fill",
    },
    {
      name: "Leaderboard",
      icon: "bi-trophy-fill",
    },
    {
      name: "Settings",
      icon: "bi-gear-fill",
    },
  ];

  return (
    <div className="container-fluid p-0 d-flex vh-100 overflow-hidden bg-light">
      {/* SIDEBAR */}
      <aside className="dashboard-sidebar bg-white border-end d-flex flex-column flex-shrink-0">
        {/* NAVIGATION TITLE */}
        <div className="sidebar-dashboard-title px-3 pt-4 pb-2 d-none d-lg-block">
          Dashboard
        </div>

        {/* MENU */}
        <nav className="nav nav-pills flex-column gap-1 px-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              type="button"
              title={item.name}
              onClick={() => setActiveMenu(item.name)}
              className={`nav-link d-flex align-items-center justify-content-center justify-content-lg-start gap-lg-3 ${
                activeMenu === item.name
                  ? "bg-danger bg-opacity-10 text-danger fw-semibold"
                  : "text-secondary"
              }`}
            >
              <i className={`bi ${item.icon} fs-5`}></i>

              <span className="d-none d-lg-inline">{item.name}</span>

              {item.badge && (
                <span className="badge bg-danger rounded-circle ms-auto d-none d-lg-inline">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>
      </aside>

      {/* MAIN AREA */}
      <div className="flex-grow-1 d-flex flex-column overflow-hidden">
        {/* HEADER */}
        <header className="auth-navbar navbar bg-white border-bottom shadow-sm px-3 px-md-5">
          {/* LOGO */}
          <div className="sidebar-logo d-flex align-items-center">
            <Link to="/" className="logo">
              <img src={logo} alt="NexGeda Logo" />
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="d-flex align-items-center gap-2 gap-md-4 ms-auto text-secondary">
            {/* HOME */}
            <Link to="/" className="navlink fw-semibold px-2 px-sm-3">
              <i className="bi bi-house-door-fill fs-5"></i>
            </Link>

            {/* USER PROFILE */}
            <div className="d-flex align-items-center gap-2 ps-3">
              <label
                htmlFor="avatar-file-input"
                className="position-relative m-0"
                style={{ cursor: "pointer" }}
              >
                <div
                  className="rounded-circle overflow-hidden bg-secondary d-flex align-items-center justify-content-center"
                  style={{
                    width: "40px",
                    height: "40px",
                  }}
                >
                  {currentUser.avatar ? (
                    <img
                      src={
                        currentUser.avatar.startsWith("http")
                          ? currentUser.avatar
                          : `http://localhost:2123/${currentUser.avatar}`
                      }
                      alt="User Profile"
                      className="w-100 h-100 object-fit-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  ) : (
                    <span className="text-white fw-bold">
                      {getInitials(currentUser.name)}
                    </span>
                  )}
                </div>

                <span
                  className="position-absolute bottom-0 end-0 bg-success border border-white rounded-circle"
                  style={{
                    width: "11px",
                    height: "11px",
                  }}
                ></span>
              </label>

              <input
                id="avatar-file-input"
                type="file"
                accept="image/*"
                className="d-none"
                onChange={handleAvatarFileChange}
              />

              <div className="d-none d-md-flex flex-column text-start lh-1">
                <span className="fw-bold text-dark">{currentUser.name}</span>

                <small className="text-muted mt-1">
                  {currentUser.email
                    ? currentUser.email.split("@")[0]
                    : "user_handle"}
                </small>
              </div>
            </div>

            {/* LOGOUT */}
            <button
              type="button"
              className="btn border-0 p-1 text-secondary shadow-none ps-3"
              onClick={handleLogout}
            >
              <i className="bi bi-box-arrow-right fs-4"></i>
            </button>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="flex-grow-1 overflow-auto p-3 p-md-4 p-lg-5">
          {/* PAGE TITLE */}
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-4 mb-5">
            <div className="mb-4">
              <h1 className="display-6 mb-1">Welcome back, </h1>
              <span className="fw-bold display-6 text-danger">
                {currentUser.name} 👋
              </span>

              <div className="mt-5">
                {" "}
                <p className="mb-0">
                  Your journey to becoming the next generation of leaders starts
                  here.{" "}
                </p>
                <span className="txt">
                  {" "}
                  Build.
                  <span className="txti"> Grow. </span>
                  Lead.
                </span>{" "}
              </div>
            </div>

            {/* SEARCH + ACTIONS */}
            <div className="d-flex flex-column flex-sm-row gap-2">
              <div className="position-relative">
                <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>

                <input
                  type="text"
                  className="form-control ps-5"
                  placeholder="Search Student..."
                />
              </div>

              <button className="btn btn-outline-secondary bg-white">
                <i className="bi bi-filter"></i>
              </button>

              <button className="btn btn-danger fw-semibold text-nowrap">
                + Invite students
              </button>
            </div>
          </div>

          {/* ERROR */}
          {loadingError && (
            <div className="alert alert-warning border-0 shadow-sm mb-4">
              {loadingError}
            </div>
          )}

          {/* STUDENT GRID */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
            {students.map((student) => (
              <div key={student.id} className="col">
                <div className="card h-100 bg-white border-0 shadow-sm rounded-3 p-4 text-center">
                  {/* AVATAR */}
                  <div className="position-relative mx-auto mb-3">
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="rounded-circle border border-3 border-light object-fit-cover"
                      style={{
                        width: "90px",
                        height: "90px",
                      }}
                    />

                    <span
                      className="position-absolute bg-success border border-white rounded-circle"
                      style={{
                        width: "14px",
                        height: "14px",
                        right: "2px",
                        bottom: "5px",
                      }}
                    ></span>
                  </div>

                  {/* NAME */}
                  <h3 className="h5 fw-bold text-dark mb-3">{student.name}</h3>

                  {/* XP + LEVEL */}
                  <p className="mb-1 small text-muted  font-monospace text-uppercase">
                    {student.dep}
                  </p>
                  <p className="small text-muted mb-4  font-monospace text-uppercase">
                    {student.year}
                  </p>
                  {/* STATS */}
                  <div className="row g-0 border-top border-bottom py-3 mb-4">
                    <div className="col-4 border-end">
                      <h4 className="fw-bold m-0 fs-5">{student.joined}</h4>
                      <small className="text-muted">Joined</small>
                    </div>

                    <div className="col-4 border-end">
                      <h4 className="fw-bold m-0 fs-5">{student.finished}</h4>
                      <small className="text-muted">Finished</small>
                    </div>

                    <div className="col-4">
                      <h4 className="fw-bold m-0 fs-5">{student.onGoing}</h4>
                      <small className="text-muted">On Going</small>
                    </div>
                  </div>

                  {/* VIEW PROFILE */}
                  <button className="btn btn-primary w-100 fw-semibold">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
