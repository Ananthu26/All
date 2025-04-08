import React, { useEffect, useState } from "react";
import PNavbar from "./PNavbar";
import { Container, Form, Button, Card, Row, Col, Toast, ToastContainer } from "react-bootstrap";
import axios from "axios";

function MyProfile() {
  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", variant: "success" });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const res = await axios.get(`http://localhost:5000/api/users/${userId}`);
        setUser(res.data);
      } catch (err) {
        setToast({ show: true, message: "Failed to fetch user data", variant: "danger" });
      }
    };
    fetchUser();
  }, []);

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:5000/api/users/${user._id}`, user);
      setEditMode(false);
      setToast({ show: true, message: "Profile updated", variant: "success" });
    } catch (err) {
      setToast({ show: true, message: "Update failed", variant: "danger" });
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ display: "flex" }}>
      <PNavbar />
      <Container fluid style={{ marginLeft: "250px", padding: "20px", backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
        <h2>My Profile</h2>
        <Card className="p-4 shadow-sm mt-3">
          <Form>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    name="name"
                    value={user.name || ""}
                    onChange={handleChange}
                    disabled={!editMode}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    value={user.email || ""}
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    name="phone"
                    value={user.phone || ""}
                    onChange={handleChange}
                    disabled={!editMode}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    name="address"
                    value={user.address || ""}
                    onChange={handleChange}
                    disabled={!editMode}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type="date"
                    name="dob"
                    value={user.dob ? user.dob.substring(0, 10) : ""}
                    onChange={handleChange}
                    disabled={!editMode}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Occupation</Form.Label>
                  <Form.Control
                    name="occupation"
                    value={user.occupation || ""}
                    onChange={handleChange}
                    disabled={!editMode}
                  />
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex justify-content-between mt-3">
              <Button variant="secondary" onClick={() => setEditMode(!editMode)}>
                {editMode ? "Cancel" : "Edit"}
              </Button>
              {editMode && (
                <Button variant="primary" onClick={handleSave}>
                  Save
                </Button>
              )}
            </div>
          </Form>
        </Card>
      </Container>

      <ToastContainer position="bottom-end" className="p-3">
        <Toast
          bg={toast.variant}
          onClose={() => setToast({ ...toast, show: false })}
          show={toast.show}
          delay={3000}
          autohide
        >
          <Toast.Body>{toast.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default MyProfile;
