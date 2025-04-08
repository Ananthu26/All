import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-primary-dark text-white py-5">
            <Container>
                <Row className="justify-content-center text-center g-4">
                    <Col lg={4} className="mb-4">
                        <h5 className="mb-3 fw-bold">AX Insurance</h5>
                        <p className="text-light opacity-75">Providing reliable insurance solutions with integrity and excellence. IRDAI Licensed and Regulated Insurance Provider.</p>
                    </Col>
                    <Col lg={2} md={4} className="mb-4">
                        <h6 className="mb-3 text-accent fw-bold">Company</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/about" className="text-light text-decoration-none hover-opacity" onClick={scrollToTop}>About</Link></li>
                            <li className="mb-2"><Link to="/services" className="text-light text-decoration-none hover-opacity" onClick={scrollToTop}>Services</Link></li>
                            <li className="mb-2"><Link to="/contact" className="text-light text-decoration-none hover-opacity" onClick={scrollToTop}>Contact</Link></li>
                        </ul>
                    </Col>
                    <Col lg={3} md={4} className="mb-4">
                        <h6 className="mb-3 text-accent fw-bold">Products</h6>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/life" className="text-light text-decoration-none hover-opacity" onClick={scrollToTop}>Life Insurance</Link></li>
                            <li className="mb-2"><Link to="/health" className="text-light text-decoration-none hover-opacity" onClick={scrollToTop}>Health Insurance</Link></li>
                            <li className="mb-2"><Link to="/motor" className="text-light text-decoration-none hover-opacity" onClick={scrollToTop}>Motor Insurance</Link></li>
                        </ul>
                    </Col>
                    <Col lg={3} md={4}>
                        <h6 className="mb-3 text-accent fw-bold">Contact</h6>
                        <address className="text-light opacity-75 mb-3">
                            <div>AX Insurance Tower</div>
                            <div>Kochi, Kerala</div>
                            <div className="mt-2">
                                <a href="tel:+911234567890" className="text-light text-decoration-none hover-opacity">+91 1234 567 890</a>
                            </div>
                            <div>
                                <a href="mailto:care@axinsurance.in" className="text-light text-decoration-none hover-opacity">support@axinsurance.in</a>
                            </div>
                        </address>
                    </Col>
                </Row>
                <hr className="my-4 opacity-25" />
                <Row>
                    <Col className="text-center">
                        <small className="text-light opacity-75">
                            &copy; {new Date().getFullYear()} AX Insurance. All rights reserved. | 🏅
                        </small>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer