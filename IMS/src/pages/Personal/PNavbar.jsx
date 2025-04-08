// src/pages/Personal/PNavbar.jsx
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
    FaUserShield,
    FaFileAlt,
    FaMoneyCheck,
    FaClipboardList,
    FaHeadset,
    FaCog,
} from "react-icons/fa";
import logo from "../../assets/images/logo-blue.png";

const navItemStyle = {
    display: "flex",
    alignItems: "center",
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    padding: "12px",
    transition: "all 0.3s ease-in-out",
    gap: "10px",
};

const PNavbar = () => {
    return (
        <div
            style={{
                width: "250px",
                height: "100vh",
                background: "#3498db",
                color: "white",
                padding: "15px",
                position: "fixed",
                top: "0",
                left: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                zIndex: "999",
            }}
        >
            <div style={{ textAlign: "center", marginBottom: "20px", width: "100%" }}>
                <Image src={logo} alt="AX Insurance Logo" style={{ width: "150px" }} />
            </div>

            <nav
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    width: "100%",
                }}
            >
                <Link to="/personal-dashboard" style={{ textDecoration: "none" }}>
                    <div style={navItemStyle}><FaUserShield /> <span>My Dashboard</span></div>
                </Link>
                <Link to="/myprofile" style={{ textDecoration: "none" }}>
                    <div style={navItemStyle}><FaUserShield /> <span>My Profile</span></div>
                </Link>
                <Link to="/mypolicy" style={{ textDecoration: "none" }}>
                    <div style={navItemStyle}><FaFileAlt /> <span>My Policies</span></div>
                </Link>
                <Link to="/payments" style={{ textDecoration: "none" }}>
                    <div style={navItemStyle}><FaMoneyCheck /> <span>Payments</span></div>
                </Link>
                <Link to="/claimhistory" style={{ textDecoration: "none" }}>
                    <div style={navItemStyle}><FaClipboardList /> <span>Claim History</span></div>
                </Link>
                <Link to="/support" style={{ textDecoration: "none" }}>
                    <div style={navItemStyle}><FaHeadset /> <span>Support</span></div>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <div style={navItemStyle}><FaCog /> <span>Sign Out & Exit</span></div>
                </Link>
            </nav>
        </div>
    );
};

export default PNavbar;
