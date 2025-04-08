import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ANavbar from "./ANavbar";
import { Card, Button, Form, Table, Toast, ToastContainer, Modal } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

function ManagePolicy() {
  const [policies, setPolicies] = useState([]);
  const [filteredPolicies, setFilteredPolicies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState("success");
  const [showModal, setShowModal] = useState(false);
  const [newPolicy, setNewPolicy] = useState({
    name: "",
    description: "",
    coverageType: "",
    coverageAmount: "",
    premiumAmount: "",
    durationInYears: "",
    eligibilityCriteria: "",
    startDate: "",
    endDate: "",
    isActive: true
  });

  useEffect(() => {
    fetchPolicies();
  }, []);

  useEffect(() => {
    const filtered = policies.filter(p =>
      p.policyNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPolicies(filtered);
  }, [searchQuery, policies]);

  const fetchPolicies = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/policies");
      setPolicies(res.data);
      setFilteredPolicies(res.data);
    } catch (err) {
      console.error("Error fetching policies:", err);
    }
  };

  const handleAddPolicy = async () => {
    try {
      const payload = {
        ...newPolicy,
        coverageAmount: parseFloat(newPolicy.coverageAmount),
        premiumAmount: parseFloat(newPolicy.premiumAmount),
        durationInYears: parseInt(newPolicy.durationInYears),
        isActive: newPolicy.isActive === true || newPolicy.isActive === "true"
      };

      await axios.post("http://localhost:5000/api/policies", payload);
      setToastMessage("Policy added successfully!");
      setToastVariant("success");
      setShowToast(true);
      setShowModal(false);
      setNewPolicy({
        name: "",
        description: "",
        coverageType: "",
        coverageAmount: "",
        premiumAmount: "",
        durationInYears: "",
        eligibilityCriteria: "",
        startDate: "",
        endDate: "",
        isActive: true
      });
      fetchPolicies();
    } catch (err) {
      console.error("Add policy error:", err.response?.data || err);
      setToastMessage("Failed to add policy.");
      setToastVariant("danger");
      setShowToast(true);
    }
  };

  const handleDelete = async (id, name) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete policy "${name}"?`);
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/policies/${id}`);
      setToastMessage(`Policy "${name}" deleted successfully.`);
      setToastVariant("danger");
      setShowToast(true);
      fetchPolicies();
    } catch (err) {
      console.error("Delete policy error:", err);
      setToastMessage("Failed to delete policy.");
      setToastVariant("danger");
      setShowToast(true);
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <ANavbar />
      <div style={{ padding: "20px", width: "100%" }}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>Manage Policies</h4>
          <Button onClick={() => setShowModal(true)}>Add Policy</Button>
        </div>

        <Form className="d-flex mb-3" style={{ maxWidth: "500px" }}>
          <Form.Control
            type="text"
            placeholder="Search by policy number or name..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
          <Button variant="primary" className="ms-2"><FaSearch /></Button>
        </Form>

        <Card className="shadow-sm border-0">
          <Card.Body>
            {filteredPolicies.length === 0 ? (
              <p>No policies found.</p>
            ) : (
              <Table hover responsive bordered>
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Policy Number</th>
                    <th>Name</th>
                    <th>Coverage Type</th>
                    <th>Coverage</th>
                    <th>Premium</th>
                    <th>Duration (Years)</th>
                    <th>Status</th>
                    <th>Start</th>
                    <th>End</th>
                    <th>Created At</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPolicies.map((policy, idx) => (
                    <tr key={policy._id}>
                      <td>{idx + 1}</td>
                      <td>{policy.policyNumber}</td>
                      <td>{policy.name}</td>
                      <td>{policy.coverageType}</td>
                      <td>${policy.coverageAmount}</td>
                      <td>${policy.premiumAmount}</td>
                      <td>{policy.durationInYears}</td>
                      <td>{policy.status}</td>
                      <td>{policy.startDate ? new Date(policy.startDate).toLocaleDateString() : "-"}</td>
                      <td>{policy.endDate ? new Date(policy.endDate).toLocaleDateString() : "-"}</td>
                      <td>{new Date(policy.createdAt).toLocaleDateString()}</td>
                      <td>
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => handleDelete(policy._id, policy.name)}
                        >
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

        {/* Add Policy Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Policy</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-2">
                <Form.Label>Policy Name</Form.Label>
                <Form.Control
                  value={newPolicy.name}
                  onChange={e => setNewPolicy({ ...newPolicy, name: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  value={newPolicy.description}
                  onChange={e => setNewPolicy({ ...newPolicy, description: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Coverage Type</Form.Label>
                <Form.Control
                  value={newPolicy.coverageType}
                  onChange={e => setNewPolicy({ ...newPolicy, coverageType: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Coverage Amount (₹)</Form.Label>
                <Form.Control
                  type="number"
                  value={newPolicy.coverageAmount}
                  onChange={e => setNewPolicy({ ...newPolicy, coverageAmount: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Premium Amount (₹)</Form.Label>
                <Form.Control
                  type="number"
                  value={newPolicy.premiumAmount}
                  onChange={e => setNewPolicy({ ...newPolicy, premiumAmount: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Duration (Years)</Form.Label>
                <Form.Control
                  type="number"
                  value={newPolicy.durationInYears}
                  onChange={e => setNewPolicy({ ...newPolicy, durationInYears: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Eligibility Criteria</Form.Label>
                <Form.Control
                  value={newPolicy.eligibilityCriteria}
                  onChange={e => setNewPolicy({ ...newPolicy, eligibilityCriteria: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                  type="date"
                  value={newPolicy.startDate}
                  onChange={e => setNewPolicy({ ...newPolicy, startDate: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                  type="date"
                  value={newPolicy.endDate}
                  onChange={e => setNewPolicy({ ...newPolicy, endDate: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Check
                  type="checkbox"
                  label="Is Active"
                  checked={newPolicy.isActive}
                  onChange={e => setNewPolicy({ ...newPolicy, isActive: e.target.checked })}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
            <Button variant="primary" onClick={handleAddPolicy}>Add</Button>
          </Modal.Footer>
        </Modal>

        <ToastContainer position="bottom-end" className="p-3">
          <Toast
            show={showToast}
            onClose={() => setShowToast(false)}
            delay={3000}
            autohide
            bg={toastVariant}
          >
            <Toast.Body className="text-white">{toastMessage}</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </div>
  );
}

export default ManagePolicy;