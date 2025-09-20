
import { Navbar, Container, Nav, Button, Row, Col, Form, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Penny from '../src/assets/Penny_head.png';
import Stone from '../src/assets/penny_stone.png';

const LandingPage = () => {
  return (
    <>
   
      <Navbar bg="light" expand="lg" className="static-top">
        <Container>
          <Navbar.Brand href="#home">Save Penelope</Navbar.Brand>
         
        </Container>
      </Navbar>

      {/* Masthead */}
      <header className="text-white text-center py-5">
        <Container>
          <Row className="justify-content-center">
            <Col xl={6}>
              
                  <Image src={Stone} fluid></Image> 
            </Col>
          </Row>
        </Container>
      </header>

      {/* Features */}
      <section className="features-icons bg-light text-center py-5">
        <Container>
          <Row>
            <Col lg={4}>
              <div className="mb-5">
                <i className="bi-window text-primary fs-1"></i>
                <h3>Fully Responsive</h3>
                <p>This theme will look great on any device, no matter the size!</p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="mb-5">
                <i className="bi-layers text-primary fs-1"></i>
                <h3>Bootstrap 5 Ready</h3>
                <p>Featuring the latest build of the new Bootstrap 5 framework!</p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="mb-5">
                <i className="bi-terminal text-primary fs-1"></i>
                <h3>Easy to Use</h3>
                <p>Ready to use with your own content, or customize the source files!</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Showcases */}
      <section className="showcase">
        <Container fluid className="p-0">
          <Row className="g-0">
            <Col lg={6} className="order-lg-2 showcase-img"
              style={{ backgroundImage: "url('assets/img/bg-showcase-1.jpg')" }}
            ></Col>
            <Col lg={6} className="order-lg-1 my-auto p-5">
              <h2>Fully Responsive Design</h2>
              <p>
                This theme will look great on any device, whether it's a phone,
                tablet, or desktop!
              </p>
            </Col>
          </Row>

          <Row className="g-0">
            <Col lg={6} className="showcase-img"
              style={{ backgroundImage: "url('assets/img/bg-showcase-2.jpg')" }}
            ></Col>
            <Col lg={6} className="my-auto p-5">
              <h2>Updated For Bootstrap 5</h2>
              <p>
                Bootstrap 5 is leading the way in mobile responsive web
                development!
              </p>
            </Col>
          </Row>

          <Row className="g-0">
            <Col lg={6} className="order-lg-2 showcase-img"
              style={{ backgroundImage: "url('assets/img/bg-showcase-3.jpg')" }}
            ></Col>
            <Col lg={6} className="order-lg-1 my-auto p-5">
              <h2>Easy to Use & Customize</h2>
              <p>
                Out of the box, just add your content and images, and your new
                landing page will be ready to go!
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="testimonials text-center bg-light py-5">
        <Container>
          <h2 className="mb-5">What people are saying...</h2>
          <Row>
            <Col lg={4}>
              <div className="mb-5">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src="assets/img/testimonials-1.jpg"
                  alt="Margaret"
                />
                <h5>Margaret E.</h5>
                <p>"This is fantastic! Thanks so much guys!"</p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="mb-5">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src="assets/img/testimonials-2.jpg"
                  alt="Fred"
                />
                <h5>Fred S.</h5>
                <p>"Bootstrap is amazing. I've been using it a lot!"</p>
              </div>
            </Col>
            <Col lg={4}>
              <div className="mb-5">
                <img
                  className="img-fluid rounded-circle mb-3"
                  src="assets/img/testimonials-3.jpg"
                  alt="Sarah"
                />
                <h5>Sarah W.</h5>
                <p>"Thanks for making these free resources available!"</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="call-to-action text-white text-center bg-dark py-5" id="signup">
        <Container>
          <Row className="justify-content-center">
            <Col xl={6}>
              <h2 className="mb-4">Ready to get started? Sign up now!</h2>
              <Form className="form-subscribe">
                <Row>
                  <Col>
                    <Form.Control
                      size="lg"
                      type="email"
                      placeholder="Email Address"
                    />
                  </Col>
                  <Col xs="auto">
                    <Button variant="primary" size="lg" type="submit">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer bg-light py-4">
        <Container>
          <Row>
            <Col lg={6} className="text-center text-lg-start my-auto">
              <ul className="list-inline mb-2">
                <li className="list-inline-item"><a href="#!">About</a></li>
                <li className="list-inline-item">·</li>
                <li className="list-inline-item"><a href="#!">Contact</a></li>
                <li className="list-inline-item">·</li>
                <li className="list-inline-item"><a href="#!">Terms</a></li>
                <li className="list-inline-item">·</li>
                <li className="list-inline-item"><a href="#!">Privacy</a></li>
              </ul>
              <p className="text-muted small mb-0">
                © Your Website 2023. All Rights Reserved.
              </p>
            </Col>
            <Col lg={6} className="text-center text-lg-end my-auto">
              <ul className="list-inline mb-0">
                <li className="list-inline-item me-4">
                  <a href="#!"><i className="bi-facebook fs-3"></i></a>
                </li>
                <li className="list-inline-item me-4">
                  <a href="#!"><i className="bi-twitter fs-3"></i></a>
                </li>
                <li className="list-inline-item">
                  <a href="#!"><i className="bi-instagram fs-3"></i></a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default LandingPage;
