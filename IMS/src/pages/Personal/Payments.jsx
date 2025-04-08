import React from "react";
import PNavbar from "./PNavbar";
import { Card, Button, Table, Row, Col } from "react-bootstrap";

function Payments() {
    return (
        <div style={{ display: "flex" }}>
            <PNavbar />

            <div
                style={{
                    marginLeft: "250px",
                    width: "100%",
                    padding: "20px",
                    backgroundColor: "#f8f9fa",
                    minHeight: "100vh",
                }}
            >
                <h2 className="mb-4">Payments</h2>

                <Row className="g-3">
                    {/* Outstanding Payment Summary */}
                    <Col md={6}>
                        <Card className="p-3 shadow-sm border-0">
                            <h5>Outstanding Balance</h5>
                            <h2 style={{ color: "#e74c3c" }}>₹5,200</h2>
                            <p>Due by: April 20, 2025</p>
                            <Button variant="primary">Pay Now</Button>
                        </Card>
                    </Col>

                    {/* Saved Payment Method */}
                    <Col md={6}>
                        <Card className="p-3 shadow-sm border-0">
                            <h5>Saved Payment Method</h5>
                            <p><strong>Card:</strong> **** **** **** 1234</p>
                            <p><strong>Expiry:</strong> 08/26</p>
                            <Button variant="outline-secondary" size="sm">Edit Payment Method</Button>
                        </Card>
                    </Col>
                </Row>

                {/* Recent Transactions Table */}
                <Card className="mt-4 shadow-sm border-0">
                    <Card.Body>
                        <h5>Recent Transactions</h5>
                        <Table hover responsive>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Description</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>April 01, 2025</td>
                                    <td>Policy Renewal - Auto</td>
                                    <td>₹3,000</td>
                                    <td><span style={{ color: "#28a745" }}>Paid</span></td>
                                </tr>
                                <tr>
                                    <td>March 01, 2025</td>
                                    <td>Policy Renewal - Health</td>
                                    <td>₹2,500</td>
                                    <td><span style={{ color: "#28a745" }}>Paid</span></td>
                                </tr>
                                <tr>
                                    <td>February 01, 2025</td>
                                    <td>Policy Renewal - Home</td>
                                    <td>₹1,800</td>
                                    <td><span style={{ color: "#dc3545" }}>Failed</span></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Payments;
