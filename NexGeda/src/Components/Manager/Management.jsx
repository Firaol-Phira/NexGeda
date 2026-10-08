import React, { useEffect, useState } from "react";
import "./Management.css";
import { BASE_URL } from "../../config";


function Management() {
  const API = `${BASE_URL}`;
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all students
  const fetchStudents = async () => {
    try {
      const response = await fetch(`${API}/api/manager/students`);
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Failed to fetch students:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Handle payment approval
  const handleApprove = async (userId) => {
    try {
      const response = await fetch(`${API}/api/manager/payment/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to approve payment");
      }

      // Update local state instantly so the UI reflects the change without a full refresh
      setStudents((prevStudents) =>
        prevStudents.map((student) =>
          student.id === userId ? { ...student, payment_status: "paid" } : student
        )
      );
    } catch (error) {
      console.error("Payment approval error:", error);
      alert("Could not approve payment. Please try again.");
    }
  };

  return (
    <section className="management-section py-4">
      <div className="container-fluid">
        {/* Header */}
        <div className="management-header mb-4">
          <div>
            <small>MANAGEMENT</small>
            <h2>Student Management</h2>
          </div>

          <div className="student-count">
            <i className="bi bi-people me-2"></i>
            {students.length} Students
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-danger"></div>
          </div>
        )}

        {/* Students Table */}
        {!loading && (
          <div className="management-card">
            <div className="table-responsive">
              <table className="table management-table align-middle mb-0">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Student</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Payment</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {students.length > 0 ? (
                    students.map((student, index) => (
                      <tr key={student.id}>
                        {/* User number */}
                        <td className="student-number">{index + 1}</td>

                        {/* Student */}
                        <td>
                          <div className="student-info">
                            <div className="student-avatar">
                              {student.name?.charAt(0).toUpperCase()}
                            </div>

                            <strong>{student.name}</strong>
                          </div>
                        </td>

                        {/* Email */}
                        <td>{student.email}</td>

                        {/* Course */}
                        <td>
                          {student.course || (
                            <span className="text-muted">Not selected</span>
                          )}
                        </td>

                        {/* Payment */}
                        <td>
                          <span
                            className={`payment-status ${
                              student.payment_status === "paid"
                                ? "paid"
                                : "unpaid"
                            }`}
                          >
                            {student.payment_status}
                          </span>
                        </td>

                        {/* Action */}
                        <td>
                          {student.payment_status === "paid" ? (
                            <button className="btn btn-success btn-sm" disabled>
                              <i className="bi bi-check-circle me-1"></i>
                              Approved
                            </button>
                          ) : (
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => handleApprove(student.id)}
                            >
                              <i className="bi bi-check2 me-1"></i>
                              Approve
                            </button>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center py-5">
                        No students found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Management;