// DogWelfareLanguage.jsx
import React from "react";
import { Container, Row, Col, Card, Alert, ListGroup } from "react-bootstrap";

export default function DogWelfareLanguage() {
  const descriptors = [
    {
      term: "Cruel",
      description:
        "This directly addresses the active decision to withhold care, resulting in suffering and death.",
    },
    {
      term: "Heartless",
      description:
        "This term emphasizes a profound lack of compassion and feeling toward a living creature’s pain.",
    },
    {
      term: "Callous",
      description:
        "This describes an insensitive and cruel disregard for others—in this case, the dog’s life and suffering.",
    },
    {
      term: "Inhumane",
      description:
        "This term speaks to behavior that is uncivilized, brutal, and lacking human decency.",
    },
    {
      term: "Negligent",
      description:
        "This describes a failure to take proper care over something, leading to harm.",
    },
  ];

  return (
    <section aria-label="Dog welfare language">
      <Container className="py-4">
        <Row className="justify-content-center">
          {/* Responsive layout: centered column, full width on mobile, narrower on desktop */}
          <Col xs={12} md={10} >
            <Card className="shadow-sm">
              <Card.Body>
              

                <Alert variant="secondary" className="mb-4">
                  A person who intentionally lets a dog die from a treatable
                  condition like a bladder stone could be described using terms
                  that reflect extreme negligence, cruelty, and lack of empathy.
                </Alert>

                <Card.Subtitle as="h3" className="h5 mb-3">
                  Possible descriptions
                </Card.Subtitle>

                <ListGroup >
                  {descriptors.map((item) => (
                    <ListGroup.Item key={item.term} className="py-3">
                      <div className="d-flex flex-column flex-sm-row gap-1 gap-sm-3">
                        <strong className="flex-shrink-0">{item.term}:</strong>
                        <span className="text-start">{item.description} </span>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>

              
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
