import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import logo from '../../assets/images/logo-home.png';



const ASignupPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const API_URL = "http://localhost:5000/api";

  const progress = useMotionValue(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords don't match!");
      return;
    }

    if (!agreeTerms) {
      setError("Please agree to the Terms & Conditions");
      return;
    }

    try {
      setIsLoading(true);
      await axios.post(`${API_URL}/signup`, {
        email,
        password,
        fullName,
        userType: "a"
      });

      setSuccess(true);
      animate(progress, 100, { duration: 1 });

      setTimeout(() => {
        navigate("/AloginPage");
      }, 2000);
    } catch (err) {
      setError("Registration failed or user already registered");
    } finally {
      setIsLoading(false);
    }
  };

  const CircularProgress = ({ progress }) => {
    const circleLength = useTransform(progress, [0, 100], [0, 1]);
    const checkmarkPathLength = useTransform(progress, [0, 95, 100], [0, 0, 1]);
    const circleColor = useTransform(progress, [0, 95, 100], ["#FF6666", "#FF6666", "#4CAF50"]);

    return (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="120"
        viewBox="0 0 258 258"
      >
        <motion.path
          transform="translate(60 85)"
          d="M3 50L45 92L134 3"
          fill="transparent"
          stroke="#4CAF50"
          strokeWidth={8}
          style={{ pathLength: checkmarkPathLength }}
        />
        <motion.path
          d="M 130 6 C 198.483 6 254 61.517 254 130 C 254 198.483 198.483 254 130 254 C 61.517 254 6 198.483 6 130 C 6 61.517 61.517 6 130 6 Z"
          fill="transparent"
          strokeWidth="8"
          stroke={circleColor}
          style={{ pathLength: circleLength }}
        />
      </motion.svg>
    );
  };

  return (
    <>
      <Navbar expand="lg" fixed="top" className="py-2 navbar-dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src={logo}
              alt="AX Insurance Logo"
              className="navbar-logo"
              height="45"
              style={{ borderRadius: "10%" }}
            />
            <span className="ms-2 brand-text d-none d-sm-inline">AX Insurance</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
              <Nav.Link as={Link} to="/services" className="mx-2">Services</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="mx-2">Contact</Nav.Link>
              <Nav.Link as={Link} to="/Login">
                <Button variant="outline-light" className="ms-3">LOGIN</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background: "linear-gradient(to top, #a1000b, #00246d)"
      }}>
        <div style={{
          width: "400px",
          padding: "30px",
          borderRadius: "10px",
          background: success ? "rgba(255, 255, 255, 0.5)" : "white",
          backdropFilter: success ? "blur(6px)" : "none",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          position: "relative",
          transition: "all 0.3s ease",
          overflow: "hidden"
        }}>
          {success ? (
            <div style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "300px"
            }}>
              <CircularProgress progress={progress} />
            </div>
          ) : (
            <>
              <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#00246d" }}>Admin Sign Up</h2>
              {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  style={inputStyle}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={inputStyle}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={inputStyle}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  style={inputStyle}
                />
                <label style={{ fontSize: "14px", display: "flex", alignItems: "center", marginBottom: "15px" }}>
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={() => setAgreeTerms(!agreeTerms)}
                    required
                    style={{ marginRight: "8px" }}
                  />
                  I agree to the <a href="/terms" style={{ color: "#a1000b", textDecoration: "none" }}>Terms & Conditions</a>
                </label>
                <button
                  type="submit"
                  disabled={isLoading}
                  style={buttonStyle}
                >
                  {isLoading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
                </button>
              </form>
              <p style={{ textAlign: "center", marginTop: "15px" }}>
                Already have an account? <a href="/AloginPage" style={{ color: "#a1000b", textDecoration: "none" }}>Log In</a>
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  fontSize: "16px",
  marginBottom: "15px"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  border: "none",
  borderRadius: "25px",
  background: "linear-gradient(to right, #a1000b, #00246d)",
  color: "white",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "all 0.3s ease"
};

export default ASignupPage;
