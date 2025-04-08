import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Button, Toast, ToastContainer, Modal, Form, Row, Col } from 'react-bootstrap';
import PNavbar from "./PNavbar";
import GooglePayButton from "@google-pay/button-react";



function Mypolicy({ userId }) {
  const email = localStorage.getItem("email");
    const [policies, setPolicies] = useState([]);
    const [selectedPolicy, setSelectedPolicy] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMsg, setToastMsg] = useState("");
  
    useEffect(() => {
      fetchPolicies();
    }, []);
  
    const fetchPolicies = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/policies');
        setPolicies(res.data);
      } catch (err) {
        console.error('Failed to load policies', err);
      }
    };
  
    const handleApply = async () => {
      try {
        const premiumPaid = selectedPolicy?.premiumAmount ?? 1000;
        const remainingAmount = 0; // if full payment
        const nextPaymentDate = new Date();
        nextPaymentDate.setFullYear(nextPaymentDate.getFullYear() + 1);
    
        await axios.post("http://localhost:5000/api/user/policies/apply", {
          policyId: selectedPolicy._id,
          email,
          premiumPaid,
          remainingAmount,
          nextPaymentDate,
        });
    
        setToastMsg("Policy application successful!");
        setShowToast(true);
        setShowModal(false);
      } catch (err) {
        console.error("Application failed", err);
        setToastMsg("Failed to apply for policy.");
        setShowToast(true);
      }
    };
    
  
    return (
      <div style={{ display: "flex" }}>
      <PNavbar/>
      <div
                style={{
                    marginLeft: "250px", // match the width of the navbar
                    width: "100%",
                    padding: "20px",     // optional padding inside content
                    backgroundColor: "#f8f9fa",
                    minHeight: "100vh",
                }}
            >





              
      <div className="p-4">
        <h4>Available Policies</h4>
        <Row xs={1} md={2} lg={3} className="g-4">
          {policies.map((policy) => (
            <Col key={policy._id}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{policy.name}</Card.Title>
                  <Card.Text>
                    <strong>Premium:</strong> ${policy.premiumAmount}<br />
                    <strong>Coverage:</strong> ${policy.coverageAmount}<br />
                    <strong>Duration:</strong> {policy.durationInYears} years
                  </Card.Text>
                  <Button variant="primary" onClick={() => { setSelectedPolicy(policy); setShowModal(true); }}>
                    Apply
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
  
        {/* Modal to confirm and simulate payment */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Policy Application</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>You're about to apply for <strong>{selectedPolicy?.name}</strong>.</p>
            <p>Total premium to pay: <strong>${selectedPolicy?.premiumAmount}</strong></p>
            <p>This will simulate a payment process.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
            {/* <Button variant="success" onClick={handleApply}>Pay & Apply</Button> */}
            <GooglePayButton
            environment="TEST"
            paymentRequest={{
              apiVersion: 2,
              apiVersionMinor: 0,
              allowedPaymentMethods: [
                {
                  type: "CARD",
                  parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["MASTERCARD", "VISA"],
                  },
                  tokenizationSpecification: {
                    type: "PAYMENT_GATEWAY",
                    parameters: {
                      gateway: "example",
                      gatewayMerchantId: "exampleGatewayMerchantId",
                    },
                  },
                },
              ],
              merchantInfo: {
                merchantId: "12345678901234567890",
                merchantName: "Demo Merchant",
              },
              transactionInfo: {
                totalPriceStatus: "FINAL",
                totalPriceLabel: "Total",
                totalPrice: (selectedPolicy?.premiumAmount ?? "1000").toString(),
                currencyCode: "INR",
                countryCode: "IN",
              },
              shippingAddressRequired: false,
              callbackIntents: ["PAYMENT_AUTHORIZATION"],
            }}
            onLoadPaymentData={(paymentRequest) => {
              console.log("Loaded payment data", paymentRequest);
            }}
            onPaymentAuthorized={async (paymentData) => {
              console.log("Payment authorized", paymentData);
              await handleApply(); // Call your function here
              return { transactionState: "SUCCESS" };
            }}
            existingPaymentMethodRequired={false}
            buttonColor="black"
            buttonType="buy"
          />
          </Modal.Footer>
        </Modal>
  
        <ToastContainer position="bottom-end" className="p-3">
          <Toast
            show={showToast}
            onClose={() => setShowToast(false)}
            delay={3000}
            autohide
            bg={toastMsg.includes('Failed') ? "danger" : "success"}
          >
            <Toast.Body>{toastMsg}</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>





      </div>
      </div>
    );
}

export default Mypolicy