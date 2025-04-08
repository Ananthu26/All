import React from 'react'
import { Button } from 'react-bootstrap';
import { FaBars, FaUsers, FaUserShield, FaChartPie, FaFileInvoice, FaCog } from 'react-icons/fa';
import logo from "../../assets/images/logo-red.png";
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';




function ANavbar() {



  return (
    <div style={{ display: "flex" }}>
            
            <div
                style={{
                    width: "250px",
                    height: "100vh",
                    background: "#a00000",
                    color: "white",
                    padding: "15px",
                    position: "sticky",
                    top: "0",
                    left: "0",
                    transition: "width 0.3s ease-in-out",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    zIndex: "999",
                }}
            >
                
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                    <Image 
                        src={logo} 
                        alt="AX Insurance Logo" 
                        style={{ width: "150px", transition: "width 0.3s ease-in-out" }} 
                    />
                </div>

                

             <nav style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                                <Link style={{textDecoration: "none"}} to="/admin-Dashboard"> <div style={navItemStyle}><FaUserShield /> { <span>Admin Panel</span>}</div></Link>
                                <Link style={{textDecoration: "none"}} to="/manage-user"> <div style={navItemStyle}><FaUsers /> { <span>Manage Users</span>}</div></Link>
                                <Link style={{textDecoration: "none"}} to="/manage-policy"> <div style={navItemStyle}><FaUsers /> { <span>Manage Policy</span>}</div></Link>
                                <Link style={{textDecoration: "none"}} to="/analytics"> <div style={navItemStyle}><FaChartPie /> { <span>Analytics</span>}</div></Link>
                                <Link style={{textDecoration: "none"}} to="/billing"> <div style={navItemStyle}><FaFileInvoice /> { <span>Billing & Reports</span>}</div></Link>
                                <Link style={{textDecoration: "none"}} to="/"> <div style={navItemStyle}><FaCog /> {<span>Sign Out & Exit</span>}</div></Link>
                                
            </nav>
            </div>

            </div>

)
}
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

export default ANavbar