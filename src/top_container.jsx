import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { ListGroup } from "react-bootstrap";
import Stone from "./assets/penny_stone.png";
import Cruelty from "./cruelty.jsx";

function ContainerTop() {

  return (
    <section className="w-100 my-4">
        
      <Container fluid>
       
        <Row className="mt-5 align-items-center">  
          <Col className="d-flex flex-column align-items-center justify-content-center">
    
         
            <div className="text-center w-100" style={{ maxWidth: "800px" }}>
              <Image
                src={Stone}
                fluid
                alt="Penelope's bladder stone"
                className="rounded-3 shadow-sm"
              />
            </div>
            
     
          </Col>
        </Row>
         <Row>
          <Col className="mb-4 mb-lg-0 d-flex flex-column justify-content-center">
          
            <p className="lead mb-4">
              A large, painful, and life-threatening bladder stone that required
              surgical removal to save her life.
            </p>
            <Cruelty />
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
      </Container>
    </section>
  );
}

export default ContainerTop;
