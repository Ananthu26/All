import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ANavbar from "./ANavbar";
import { Container, Row, Col, Card, Button, Form, Table } from "react-bootstrap";
import { FaEnvelope, FaBell, FaUserCircle, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-red.png";

function AdminDashboard() {
  const [userCount, setUserCount] = useState(0);
  const [adminLogs, setAdminLogs] = useState([]);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/user-count');
        setUserCount(res.data.count);
      } catch (err) {
        console.error("Error fetching user count:", err);
      }
    };

    const fetchAdminLogs = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/admin-log');
        setAdminLogs(res.data);
      } catch (err) {
        console.error("Error fetching admin logs:", err);
      }
    };

    fetchUserCount();
    fetchAdminLogs();
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <ANavbar />
      <div style={{ padding: "20px", width: "100%", background: "#f8f9fa", minHeight: "100vh" }}>
        {/* Header Bar */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          background: "white",
          borderRadius: "5px",
          marginBottom: "20px"
        }}>
          <Form className="d-flex" style={{ width: "40%" }}>
            <Form.Control type="search" placeholder="Search..." className="me-2" />
            <Button variant="primary"><FaSearch /></Button>
          </Form>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <FaEnvelope size={20} />
            <FaBell size={20} />
            <FaUserCircle size={30} />
          </div>
        </div>

        <h3>Admin Dashboard</h3>
        <Row className="g-3">
          <Col md={6} lg={3}>
            <Card className="shadow-sm border-0 p-3">
              <h6 style={{ color: "#a00000" }}>Total Users</h6>
              <h3>{userCount.toLocaleString()}</h3>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card className="shadow-sm border-0 p-3">
              <h6 style={{ color: "#e67e22" }}>Pending Approvals</h6>
              <h3>34</h3>
            </Card>
          </Col>
          <Col md={6} lg={3}>
            <Card className="shadow-sm border-0 p-3">
              <h6 style={{ color: "#e74c3c" }}>Reports Generated</h6>
              <h3>89</h3>
            </Card>
          </Col>
        </Row>

        {/* Admin Log Section */}
        <Card className="mt-4 shadow-sm border-0">
          <Card.Body>
            <h5>Admin Actions Log</h5>
            {adminLogs.length === 0 ? (
              <p>No admin actions logged.</p>
            ) : (
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Admin</th>
                    <th>Action</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {adminLogs.map((log, index) => (
                    <tr key={log._id || index}>
                      <td>{index + 1}</td>
                      <td>{log.admin}</td>
                      <td>{log.action}</td>
                      <td>{new Date(log.date).toLocaleDateString()}</td>
                      <td style={{ color:
                        log.status === "Completed" ? "#28a745" :
                        log.status === "Pending" ? "#ffc107" :
                        "#dc3545"
                      }}>
                        {log.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default AdminDashboard;
