import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import Header from '../components/Header'
import Footer from '../components/Footer'


function LoginPage() {
    const [activeTab, setActiveTab] = useState("Personal");

    const tabs = ["Personal", "Admin"];

    // Different login options for each category
    const data = {
        Personal: [
            { title: "Individual Insurance", description: "for Individual to Access policy documents, claims, renewals, and more.", link: "/PLoginPage" },
            { title: "Workers Insurance", description: "Policy for individual owned companys to provide Insurance to Workers", link: "/PLoginPage" },
            { title: "Family Insurance", description: "Policy for Family members ", link: "/PLoginPage" }
        ],
        Admin: [
            { title: "Admin Dashboard", description: "Manage users, policies, and access admin tools.", link: "/ALoginPage" }
        ]
    };

    return (
        <><Header/>
        <Container style={{ padding: "60px 0", maxWidth: "900px" }}>
           
        <h2><br></br></h2>
            <h3 className="ps-5 mb-3" style={{ color: "#0033a0", fontSize: "16px", display: "flex", alignItems: "center" }}>
                <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: "5px" }} />
                <Link to="/" style={{ color: "#0033a0", textDecoration: "none", fontWeight: "bold" }}>
                    Home
                </Link>
            </h3>

            <p style={{ textAlign: "center", color: "#555", fontSize: "14px" }}>
                Log in to pay bills, manage policies, view documents, company news, materials & more.<br></br>
                <span className="text-danger " > *New Registration is available inside the Login Page</span>
            </p>
            

            
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                {tabs.map((tab) => (
                    <Button
                        key={tab}
                        variant="link"
                        style={{
                            color: activeTab === tab ? "#0033a0" : "#6c757d",
                            textTransform: "uppercase",
                            fontWeight: "bold",
                            fontSize: "14px",
                            borderBottom: activeTab === tab ? "2px solid #0033a0" : "none",
                            padding: "5px 15px",
                            marginRight: "10px"
                        }}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </Button>
                ))}
            </div>

           
            <Row className="g-3">
                {data[activeTab].map((item, index) => (
                    <Col key={index} md={6}>
                        <div
                            style={{
                                border: "1px solid #ddd",
                                padding: "20px",
                                borderRadius: "8px",
                                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                                background: "white",
                                transition: "transform 0.2s"
                            }}
                        >
                            <h5 style={{ fontWeight: "bold", marginBottom: "10px" }}>{item.title}</h5>
                            <p style={{ fontSize: "14px", color: "#555" }}>{item.description}</p>
                            <Link to={item.link} style={{ color: "#0033a0", fontWeight: "bold", textDecoration: "none" }}>
                                Login →
                            </Link>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
        <Footer/>
        </>
    );
}

export default LoginPage;
