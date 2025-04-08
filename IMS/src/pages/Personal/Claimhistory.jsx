import React from "react";
import PNavbar from "./PNavbar";
import { Container, Card, Table } from "react-bootstrap";

function Claimhistory({ embedded = false }) {
  const content = (
    <>
      <h2>{embedded ? "Claim History" : "Claim History"}</h2>
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
    </>
  );

  if (embedded) return content;

  // Standalone layout
  return (
    <div style={{ display: "flex" }}>
      <PNavbar />
      <Container
        fluid
        style={{
          marginLeft: "250px",
          padding: "20px",
          backgroundColor: "#f8f9fa",
          minHeight: "100vh",
        }}
      >
        {content}
      </Container>
    </div>
  );
}

export default Claimhistory;
