import React from "react";
import PNavbar from "./PNavbar"; // or correct relative path
import { Container } from "react-bootstrap";


function Support() {
  return (
    <><div style={{ display: "flex" }}>
    <PNavbar />

    <div
        style={{
            marginLeft: "250px", // match the width of the navbar
            width: "100%",
            padding: "20px",     // optional padding inside content
            backgroundColor: "#f8f9fa",
            minHeight: "100vh",
        }}
    >
        <h2>My Policies</h2>
        {/* Your actual page content here */}
    </div>
</div>
    </>
  )
}

export default Support