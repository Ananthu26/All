// src/pages/PersonalDashboard.jsx
import { Row, Col, Card, ProgressBar, Button, Form } from "react-bootstrap";
import { FaSearch, FaEnvelope, FaBell, FaUserCircle } from "react-icons/fa";
import PNavbar from "./PNavbar";
import { Table } from "react-bootstrap";



function PersonalDashboard() {
    return (
        <div style={{ display: "flex" }}>
            <PNavbar />

            <div
                style={{
                    marginLeft: "250px", // Fixed sidebar width
                    padding: "20px",
                    width: "100%",
                    background: "#f8f9fa",
                    minHeight: "100vh",
                }}
            >
                {/* Top Bar */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px 20px",
                        background: "white",
                        borderRadius: "5px",
                        marginBottom: "20px",
                    }}
                >
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

                {/* Dashboard Cards */}
                <h3>Personal Dashboard</h3>
                <Row className="g-3 mb-4">
                    <Col md={6} lg={3}>
                        <Card className="shadow-sm border-0 p-3">
                            <h6 style={{ color: "#3498db" }}>Active Policies</h6>
                            <h3>3</h3>
                        </Card>
                    </Col>
                    <Col md={6} lg={3}>
                        <Card className="shadow-sm border-0 p-3">
                            <h6 style={{ color: "#2ecc71" }}>Total Claims</h6>
                            <h3>5</h3>
                        </Card>
                    </Col>
                    <Col md={6} lg={3}>
                        <Card className="shadow-sm border-0 p-3">
                            <h6 style={{ color: "#f39c12" }}>Pending Payments</h6>
                            <ProgressBar now={60} label={`60%`} />
                        </Card>
                    </Col>
                    <Col md={6} lg={3}>
                        <Card className="shadow-sm border-0 p-3">
                            <h6 style={{ color: "#e74c3c" }}>Support Requests</h6>
                            <h3>2</h3>
                        </Card>
                    </Col>
                </Row>

                <Card className="mt-4 shadow-sm border-0">
        <Card.Body>
          <h5>Recent Claims</h5>
          <Table hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Policy</th>
                <th>Claim Type</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Auto Insurance</td>
                <td>Accident</td>
                <td>March 18, 2025</td>
                <td><span style={{ color: "#28a745" }}>Approved</span></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Health Insurance</td>
                <td>Hospitalization</td>
                <td>March 10, 2025</td>
                <td><span style={{ color: "#ffc107" }}>Pending</span></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Home Insurance</td>
                <td>Fire Damage</td>
                <td>February 28, 2025</td>
                <td><span style={{ color: "#dc3545" }}>Rejected</span></td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

                
            </div>
        </div>
    );
}

export default PersonalDashboard;
