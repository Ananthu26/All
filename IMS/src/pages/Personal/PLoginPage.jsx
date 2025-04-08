import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import Header from '../components/Header';
import { Navbar, Nav, Container, Dropdown, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo-home.png'

const PLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const API_URL = "http://localhost:5000/api";

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   setError("");
  //   try {
  //     const response = await axios.post(`${API_URL}/login`, { email: username, password, userType: "p" });
  //     localStorage.setItem("token", response.data.token);
  //     navigate("/personal-dashboard");
  //   } catch (error) {
  //     console.error("Login error:", error);
  //     setError("Login failed. Please try again.");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email: username,
        password,
        userType: "p",
      });
  
      localStorage.setItem("email", response.data.email);
      navigate("/personal-dashboard");
    } catch (error) {
      console.error("Login error: You are in the wrong login ", error);
      setError("You are in the wrong login");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <>
      {/* #299bd8 */}
      <div>
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
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "linear-gradient(to top, #299bd8, #00246d)" }}>
        <div style={{ width: "400px", padding: "30px", borderRadius: "10px", background: "white", boxShadow: "0px 4px 10px rgba(0,0,0,0.2)" }}>
          <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#299bd8" }}> User Log In</h2>
          {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
            <input type="text" placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} required style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "5px", fontSize: "16px", marginBottom: "15px", boxSizing: "border-box" }} />
            <div style={{ position: "relative" }}>
              <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "5px", fontSize: "16px", marginBottom: "15px", boxSizing: "border-box" }} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: "16px" }}>{showPassword ? "👁️" : "🔒"}</button>
            </div>
            <button type="submit" disabled={isLoading} style={{ width: "100%", padding: "12px", border: "none", borderRadius: "25px", background: "linear-gradient(to right, #299bd8, #00246d)", color: "white", fontSize: "16px", fontWeight: "bold", cursor: "pointer", transition: "all 0.3s ease" }}>{isLoading ? "LOGGING IN..." : "LOG IN"}</button>
          </form>
          <a href="/PLoginPage" style={{ color: "#777", textDecoration: "none", display: "block", textAlign: "center", marginTop: "15px" }}>Forgot password?</a>
          <a href="/PSignupPage" style={{ display: "block", textAlign: "center", padding: "10px 14px", border: "1px solid #299bd8", borderRadius: "25px", background: "transparent", color: "#299bd8", fontSize: "14px", cursor: "pointer", transition: "all 0.3s ease", textDecoration: "none", marginTop: "15px" }}>CREATE NEW</a>
        </div>
      </div>
    </>
  );
};

export default PLoginPage;