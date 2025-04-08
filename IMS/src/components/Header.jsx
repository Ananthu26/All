import { Navbar, Nav, Container, Dropdown, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo-home.png'

function Header() {
  return (
    <Navbar expand="lg" fixed="top" className="py-2 navbar-dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo}
            alt="AX Insurance Logo"
            className="navbar-logo"
            height="45"
            style={{ borderRadius: "10%" }} // Makes the logo rounded
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
  )
}

export default Header
