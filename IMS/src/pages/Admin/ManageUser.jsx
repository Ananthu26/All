import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ANavbar from "./ANavbar";
import { Card, Button, Form, Table, Toast, ToastContainer } from "react-bootstrap";
import { FaSearch, FaEnvelope, FaBell, FaUserCircle } from "react-icons/fa";

function ManageUser() {
  const [userData, setUserData] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/manage-users');
      setUserData(res.data);
    } catch (err) {
      console.error('Error fetching user data:', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    const confirmed = window.confirm("Are you sure you want to delete this user?");
    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:5000/api/manage-users/${userId}`);
      setUserData(prev => prev.filter(user => user._id !== userId)); // remove from UI immediately
      setToastMessage("User deleted successfully.");
      setShowToast(true);
    } catch (err) {
      console.error('Error deleting user:', err);
      setToastMessage("Failed to delete user.");
      setShowToast(true);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <ANavbar />
      <div style={{ padding: "20px", width: "100%", background: "#f8f9fa", minHeight: "100vh" }}>
        
        {/* Header */}
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

        {/* Users Table */}
        <Card className="mt-4 shadow-sm border-0">
          <Card.Body>
            <h5>Manage Users</h5>
            {userData.length === 0 ? (
              <p>No users found.</p>
            ) : (
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Joined Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.map((user, index) => (
                    <tr key={user._id}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.joinedDate}</td>
                      <td style={{ color:
                        user.status === "Active" ? "#28a745" :
                        user.status === "Pending" ? "#ffc107" :
                        "#dc3545"
                      }}>
                        {user.status}
                      </td>
                      <td>
                        <Button variant="danger" size="sm" onClick={() => handleDelete(user._id)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Card.Body>
        </Card>

        {/* Toast */}
        <ToastContainer position="bottom-end" className="p-3">
          <Toast
            show={showToast}
            onClose={() => setShowToast(false)}
            delay={3000}
            autohide
            bg="danger"
          >
            <Toast.Header closeButton={false}>
              <strong className="me-auto">Notification</strong>
            </Toast.Header>
            <Toast.Body>{toastMessage}</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </div>
  );
}

export default ManageUser;
