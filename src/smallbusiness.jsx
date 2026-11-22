import {
  Container,
  Row,
  Col,
  Card,
  Image,
  ListGroup
} from 'react-bootstrap';
import Shayna from "./assets/Shayna_Head.png";
import Daniel from "./assets/dr_dan_kim.jpg";
import Penny from "./assets/Penny_head.png";
import BladderStone from "./assets/bladder_stone.jpg";

function BasicExample() {
    const handleNavigate = (event, path) => {
    if (!onNavigate) return;
    event.preventDefault();
    onNavigate(path);
  };
  return (
    <>
      {/* Navbar */}
      
      

      {/* Page Content */}
      <Container fluid>
        {/* Heading Row */}
        <Row >
            <Row >
          {[
            {
                title: 'Dr. Daniel Kim',
      
                image: Daniel,
            },
            {
                title: 'Penny (Daisy)',

                image: Penny,
            },
            {
                title: 'Shayna Davies',
     
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
          
              </Card>
            </Col>
          ))}
        </Row>
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
         <Card bg="secondary" text="white" className="my-5 py-4 text-center">
          <Card.Body>
            <p className="m-0">
                Penny had a large, painful, and life-threatening bladder stone that required
                surgical removal to save her life.  But Dan and Shayna choose to let her die. 
                The dog suffered immensely before passing away.
            </p>
          </Card.Body>
        </Card>
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

     
      
      </Container>

   
    </>
  );
}
export default BasicExample;