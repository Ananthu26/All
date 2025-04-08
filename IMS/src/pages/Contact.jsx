import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
    <Header/>
    <Container className="py-5 mt-5">
      <Row className="justify-content-center mb-5">
        <Col md={8} className="text-center">
          <h2 className="fw-bold mb-3">Contact Us</h2>
          <p className="text-muted">We're here to assist you with all your insurance needs</p>
        </Col>
      </Row>

      <Row className="justify-content-center mb-5">
        <Col md={8}>
          <div className="contact-card p-4 bg-white rounded shadow-sm">
            <Form>
              <Form.Group className="mb-4">
                <Form.Label>Full Name</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter your full name"
                  className="py-2" 
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control 
                  type="tel" 
                  placeholder="Enter your mobile number"
                  className="py-2" 
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Enter your email address"
                  className="py-2" 
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                  as="textarea" 
                  rows={4} 
                  placeholder="How can we help you?"
                  className="py-2"
                />
              </Form.Group>

              <Button 
                variant="primary" 
                type="submit" 
                className="w-100 py-2"
              >
                Send Message
              </Button>
            </Form>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center mt-5 g-4">
        <Col md={4} className="text-center">
          <div className="contact-info p-4">
            <div className="icon-wrapper mb-3">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h4 className="fw-bold mb-3">Head Office</h4>
            <p className="text-muted mb-0">
              AX Insurance Tower<br />
              Bandra Kurla Complex<br />
              Kochi, Kerala
            </p>
          </div>
        </Col>
        <Col md={4} className="text-center">
          <div className="contact-info p-4">
            <div className="icon-wrapper mb-3">
              <i className="fas fa-phone"></i>
            </div>
            <h4 className="fw-bold mb-3">Call Us</h4>
            <p className="text-muted mb-0">
              Toll Free: 1800 123 4567<br />
              Mobile: +91 1234 567 890<br />
              Mon - Sat: 9:30 AM - 6:30 PM
            </p>
          </div>
        </Col>
        <Col md={4} className="text-center">
          <div className="contact-info p-4">
            <div className="icon-wrapper mb-3">
              <i className="fas fa-envelope"></i>
            </div>
            <h4 className="fw-bold mb-3">Email Us</h4>
            <p className="text-muted mb-0">
              care@axinsurance.in<br />
              claims@axinsurance.in<br />
              support@axinsurance.in
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    <Footer/>
  </>
  )
}

export default Contact 