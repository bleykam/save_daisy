import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Card,
  Image,
  ListGroup
} from 'react-bootstrap';
import Cruelty from "./cruelty.jsx";
import Shayna from "./assets/Shayna_Head.png";
import Daniel from "./assets/dr_dan_kim.jpg";
import Penny from "./assets/Penny_head.png";
import Stone from "./assets/penny_stone.png";
import BladderStone from "./assets/bladder_stone.jpg";

export default function SmallBusinessTemplate() {
    const handleNavigate = (event, path) => {
    if (!onNavigate) return;
    event.preventDefault();
    onNavigate(path);
  };
  return (
    <>
      {/* Navbar */}
      
      

      {/* Page Content */}
      <Container className="px-4 px-lg-5">
        {/* Heading Row */}
        <Row className="gx-4 gx-lg-5 align-items-center my-5 border border-4 border-primary" style={{maxheight: 400}}>
          <Col>
          <h5>
                Penny's Bladder Stone
            </h5>
            <Image
              fluid
              rounded
              src={BladderStone}
              alt="Hero"
              style ={{maxHeight: 300}}
              className='border border-4 border-primary'
            />
          </Col>
          <Col lg={5}>
          <h5>
                Penny (Daisy)
            </h5>
           <Image
              fluid
              rounded
              style ={{maxHeight: 300}}
              src={Penny}
              alt="Hero"
              className='border border-4 border-primary'
            />
          </Col>
        </Row>
         <Card className="shadow-sm border-0 rounded-4 info-card mt-4">
          <Card.Body className="p-4 p-md-5 d-flex flex-column align-items-center gap-4">

            <div className="text-start info-body w-100">
              <p className="text-uppercase fw-bold small text-secondary mb-1">Why this matters</p>
              <h3 className="fw-bold mb-2">A 7 cm bladder stone is critical for a French Bulldog.</h3>
              <p className="mb-3">
                French Bulldogs are small (about 25 lb). A stone this large can fill much of the bladder and block urine
                flow.
              </p>

              <h5 className="fw-semibold">Potential complications</h5>
              <ListGroup as="ol" numbered className="mb-3 info-list">
                <ListGroup.Item as="li">
                  Urinary obstruction can quickly become life-threatening if the dog cannot urinate.
                </ListGroup.Item>
                <ListGroup.Item as="li">Bladder rupture if the bladder wall is stretched too far.</ListGroup.Item>
                <ListGroup.Item as="li">
                  Infection or blood in the urine because the stone irritates the bladder lining.
                </ListGroup.Item>
                <ListGroup.Item as="li">
                  Significant pain and distress that can lead to systemic illness.
                </ListGroup.Item>
              </ListGroup>

              <h5 className="fw-semibold mb-1">Treatment</h5>
              <p className="mb-0">
                Surgery (cystotomy) is usually required for stones this size in small dogs. Waiting or trying medical
                dissolution is generally not viable.
              </p>
            </div>
          </Card.Body>
        </Card>

        {/* Call to Action */}
        <Card bg="secondary" text="white" className="my-5 py-4 text-center">
          <Card.Body>
            <p className="m-0">
                Penny had a large, painful, and life-threatening bladder stone that required
                surgical removal to save her life.  But Dan and Shayna choose to let her die. 
                The dog suffered immensely before passing away.
            </p>
          </Card.Body>
        </Card>
    <Row className="gx-4 gx-lg-5 align-items-center my-5">
          <Col lg={3}>
            <Image
              fluid
              rounded
              className="mb-4 mb-lg-0 border border-4 border-primary mb-3"
              src={Daniel}
              alt="Hero"
            />
            <p className="mt-2">Dr. Daniel Kim</p>
            </Col>
            <Col lg={3}>
            <Image
              fluid
              rounded
              className="mb-4 mb-lg-0 border border-4 border-primary mb-3"
              src={Shayna}
              alt="Hero"
            />
            <p className="mt-2">Shayna Davies</p>
          </Col>
          <Col lg={5}>
            <h3 className="fw-light"> A person who intentionally lets a dog die from a treatable condition like a bladder stone could be described using terms that reflect extreme negligence, cruelty, and lack of empathy.</h3>
            <p>
               
            </p>
            <Button variant="primary" href="#!">
              Call to Action!
            </Button>
          </Col>
        </Row>
        <Cruelty />

        {/* Content Row */}
        <Row className="gx-4 gx-lg-5">
          {[
            {
                title: 'Dr. Daniel Kim',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                image: Daniel,
            },
            {
                title: 'Penny (Daisy)',
                text: 'Quod tenetur ex natus at dolorem enim!',
                image: Penny,
            },
            {
                title: 'Shayna Davies',
                text: 'Rem magni quas ex numquam, maxime minus.',
                image: Shayna,
            },
          ].map((card, idx) => (
            <Col md={4} className="mb-5" key={idx}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title as="h2">{card.title}</Card.Title>
                    <Image
            fluid
            rounded
            className="mb-3"
            src={card.image}
            alt={card.title}
          />
                  <Card.Text>{card.text}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button size="sm" variant="primary" href="#!">
                    More Info
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="py-5 bg-dark">
        <Container className="px-4 px-lg-5">
          <p className="m-0 text-center text-white">
            Copyright © Your Website 2023
          </p>
        </Container>
      </footer>
    </>
  );
}
