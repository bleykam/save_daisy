import { Container, Row, Col, Card, Button, ButtonGroup } from "react-bootstrap";
import Penny from '../src/assets/Penny_head.png';
import Shayna from '../src/assets/Shayna_Head.png';

export default function Album() {
  const cards = Array.from({ length: 3 }); // 9 cards

  return (
    <div className="album py-5 bg-light">
      <Container>
        <Row>
          {cards.map((_, idx) => (
            <Col md={4} key={idx} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={Penny}
                  alt="Thumbnail"
                  style={{ height: "225px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <ButtonGroup size="sm">
                      <Button variant="outline-secondary">View</Button>
                      <Button variant="outline-secondary">Edit</Button>
                    </ButtonGroup>
                    <small className="text-muted">9 mins</small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
