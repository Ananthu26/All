import { Container, Row, Col, Card } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'


function Services() {
  return (
    <>
    <Header/>
    <Container className="py-5 mt-5">
      <Row className="text-center mb-5">
        <Col>
          <h2>Our Insurance Services</h2>
          <p className="lead">Choose from our wide range of insurance solutions</p>
        </Col>
      </Row>
      <Row>
        <Col md={6} lg={3} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <div className="display-4 mb-3">🏠</div>
              <Card.Title>Life Insurance</Card.Title>
              <Card.Text>Secure your family's future with our comprehensive life insurance plans.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <div className="display-4 mb-3">🏥</div>
              <Card.Title>Health Insurance</Card.Title>
              <Card.Text>Get the best medical care with our flexible health insurance coverage.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <div className="display-4 mb-3">🚗</div>
              <Card.Title>Auto Insurance</Card.Title>
              <Card.Text>Protect your vehicle with our reliable auto insurance policies.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Body>
              <div className="display-4 mb-3">🏢</div>
              <Card.Title>Property Insurance</Card.Title>
              <Card.Text>Safeguard your property with our extensive coverage options.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      


    </Container>
    <section style={{ background: "#e8f1fa", padding: "60px 0", textAlign: "center" }}>
    <Container>
      <h2 style={{ fontWeight: "bold", color: "#132d7c" }}>About AIG</h2>
      <p style={{ maxWidth: "700px", margin: "auto", fontSize: "18px", lineHeight: "1.6", color: "#333" }}>
        We are American International Group, Inc. (AIG), a leading global insurance organization providing a wide 
        range of property casualty insurance and other financial services. We provide world-class products and 
        expertise to businesses and individuals in approximately 190 countries and jurisdictions through AIG operations 
        and network partners. And we are committed to using our insights and thought leadership to not only manage risks, 
        but to make real positive differences in every community we serve.  
        <a href="#" style={{ color: "#0056b3", textDecoration: "none", fontWeight: "500" }}> Get to know us better.</a>
      </p>
    </Container>
  </section>

  <Footer/>
  </>
  )
}

export default Services