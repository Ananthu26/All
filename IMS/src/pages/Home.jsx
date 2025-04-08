import { Carousel, Container, Row, Col, Button, Card } from 'react-bootstrap'
import heroVideo from '../assets/videos/Home_Page_Video01.mp4'
import sureshboy from '../assets/images/sureshboy.jpg';
import trumpboi from '../assets/images/trumpboi.jpg';
import neilTyson from '../assets/images/neilTyson.png'
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Annuity from '../assets/images/Annuity.png'
import Life from '../assets/images/Life.png'
import Farm from '../assets/images/Farm.png'
import Business from '../assets/images/Business.png'
import PRTm from '../assets/images/PRT.png'
import Explore from '../assets/images/Explore.png'
import Header from '../components/Header'
import Footer from '../components/Footer'


function Home() {

  const cards = [
    { img: Annuity, title: "Annuity", icon: "🏪" },
    { img: Life, title: "Life Insurance", icon: "💰" },
    { img: Farm, title: "Farm & Ranch Insurance", icon: "⚕️" },
    { img: Business, title: "Business Insurance", icon: "🏖️" },
    { img: PRTm, title: "Pension Risk Transfer", icon: "❤️" },
    { img: Explore, title: "Explore Insurance", icon: "🏡" }
  ];
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4; 

  const moveLeft = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const moveRight = () => {
    if (startIndex + visibleCards < cards.length) setStartIndex(startIndex + 1);
  };














  return (
    
    <main className="overflow-hidden">
      <Header/>
      {/* Hero Section */}
      <section className="hero-section py-5" style={{ height: '70vh', position: 'relative' }}>
        <video
          autoPlay
          muted
          loop
          className="hero-video"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100vh',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0
          }}>
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="hero-overlay px-4" style={{ height: '100vh' }}>
          <Container className="h-100 d-flex align-items-center justify-content-center">
            <Row className="justify-content-center text-center">
              <Col md={10} lg={8} className="fade-in text-white" style={{ height: '50vh' }}>
                <h1 className="hero-title mb-4">
                  Secure Your Future Today
                </h1>
                <p className="hero-subtitle mb-4">
                  Protecting what matters most with comprehensive insurance solutions tailored to your needs.
                </p>
                <div className="d-flex justify-content-center gap-3">
                  <Button
                    variant="primary"
                    size="lg"
                    className="hero-button"
                  >
                    Get Your Premium
                  </Button>
                  <Button
                    variant="outline-light"
                    size="lg"
                    className="hero-button"
                  >
                    Register Now
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>


      {/* Convincing Section */}
      <section style={{ background: "#c6dcf3", padding: "40px 0" }}>
        <Container>
          <Row className="g-4 justify-content-center">
            {/* First Item */}
            <Col sm={12} md={12} lg={4} className="d-flex justify-content-center">
              <Card className="border-0 bg-transparent d-flex flex-row align-items-center h-100">
                <Card.Img
                  src={sureshboy}
                  className="img-fluid"
                  style={{ width: "150px", height: "auto", marginRight: "15px" }}
                />
                <Card.Body className="text-start">
                  <Card.Title className="fw-bold">Suresha Krishna Discusses Insurance</Card.Title>
                  <Card.Text>
                    "Life is like a pandi lorry—totally unpredictable. With the right insurance, you're totally safe."
                  </Card.Text>
                  <a href="https://www.instagram.com/reel/DEP4izEyXTW/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="text-primary fw-semibold">
                    Watch the video →
                  </a>
                </Card.Body>
              </Card>
            </Col>

            {/* Second Item */}
            <Col sm={12} md={12} lg={4} className="d-flex justify-content-center">
              <Card className="border-0 bg-transparent d-flex flex-row align-items-center h-100">
                <Card.Img
                  src={trumpboi}
                  className="img-fluid"
                  style={{ width: "150px", height: "auto", marginRight: "15px" }}
                />
                <Card.Body className="text-start">
                  <Card.Title className="fw-bold">Preparing for the Future</Card.Title>
                  <Card.Text>
                    "Trump reveals the steps to secure financial stability through smart insurance decisions."
                  </Card.Text>
                  <a href="#" className="text-primary fw-semibold">
                    Read the story →
                  </a>
                </Card.Body>
              </Card>
            </Col>

            {/* Third Item */}
            <Col sm={12} md={12} lg={4} className="d-flex justify-content-center">
              <Card className="border-0 bg-transparent d-flex flex-row align-items-center h-100">
                <Card.Img
                  src={neilTyson}
                  className="img-fluid"
                  style={{ width: "150px", height: "auto", marginRight: "15px" }}
                />
                <Card.Body className="text-start">
                  <Card.Title className="fw-bold">Neil deGrasse Tyson on Insurance: A Quantum Fiscal Anomaly</Card.Title>
                  <Card.Text>
                    "Insurance is a fiscal singularity—without it, your liquidity undergoes entropic dissolution, cascading into an inescapable vortex of monetary annihilation."
                  </Card.Text>
                  <a href="#" className="text-primary fw-semibold">
                    Read the story →
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>







      {/* Features Section */}
      <section className="section-light py-5">
        <Container className="py-4">
          <Row className="text-center mb-5">
            <Col>
              <h2 className="text-primary fw-bold mb-3">
                Why Choose AX Insurance?
              </h2>
            </Col>
          </Row>

          <Row className="g-4">
            {/* Feature 1: Comprehensive Coverage */}
            <Col md={4}>
              <Card className="text-center p-4 h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className="feature-icon mb-3">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <Card.Title className="fw-bold mb-3">
                    Comprehensive Coverage
                  </Card.Title>
                  <Card.Text className="text-muted">
                    Tailored insurance solutions for all your needs, providing complete protection for you and your family.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Feature 2: Fast Claims Process */}
            <Col md={4}>
              <Card className="text-center p-4 h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className="feature-icon mb-3">
                    <i className="fas fa-bolt"></i>
                  </div>
                  <Card.Title className="fw-bold mb-3">
                    Fast Claims Process
                  </Card.Title>
                  <Card.Text className="text-muted">
                    Experience hassle-free claims with our quick settlement process and dedicated support team.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Feature 3: Premium Service */}
            <Col md={4}>
              <Card className="text-center p-4 h-100 border-0 shadow-sm">
                <Card.Body>
                  <div className="feature-icon mb-3">
                    <i className="fas fa-gem"></i>
                  </div>
                  <Card.Title className="fw-bold mb-3">
                    Premium Service
                  </Card.Title>
                  <Card.Text className="text-muted">
                    24/7 dedicated customer support ensuring you get the assistance you need, whenever you need it.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>












      {/* Card Slideshow */}
      <section style={{ background: "#f8f9fa", padding: "80px 0" }}>
        <h2 className="text-center fw-bold">Coverage Options</h2>
        <p className="text-center text-muted">Find the right coverage for life's twists and turns.</p>

        <div className="position-relative text-center">
          {/* Cards Row - Only Shows 4 Cards at a Time */}
          <Row className="justify-content-center align-items-center flex-nowrap overflow-hidden">
            {cards.slice(startIndex, startIndex + visibleCards).map((card, index) => (
              <Col key={index} md={3} className="d-flex justify-content-center">
                <div className="text-center">
                  <img
                    src={card.img}
                    className="img-fluid"
                    style={{ height: "500px", width: "100%", borderRadius: "10px", transition: "transform 0.5s" }}
                  />
                  <h5 className="fw-bold mt-3">{card.icon}{card.title}</h5>
                </div>
              </Col>
            ))}
          </Row>

          {/* Navigation Arrows */}
          <Button
            className="position-absolute top-50 start-0 translate-middle-y d-flex justify-content-center"
            style={{ background: "transparent", border: "none", fontSize: "30px", color: "#007bff" }}
            onClick={moveLeft}
            disabled={startIndex === 0}
          >
            <FaChevronLeft />
          </Button>

          <Button
            className="position-absolute top-50 end-0 translate-middle-y d-flex justify-content-center"
            style={{ background: "transparent", border: "none", fontSize: "30px", color: "#007bff" }}
            onClick={moveRight}
            disabled={startIndex + visibleCards >= cards.length}
          >
            <FaChevronRight />
          </Button>
        </div>
      </section>

<Footer />
    </main>
  )
}

export default Home 