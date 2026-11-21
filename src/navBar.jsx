
import "bootstrap/dist/css/bootstrap.min.css";
import {Navbar, Nav, Container} from "react-bootstrap";




export default function NavBar() {

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Container className="px-5">
          <Navbar.Brand href="#!">Penelope</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="ms-auto mb-2 mb-lg-0">
              <Nav.Link active href="/">Home</Nav.Link>
              <Nav.Link href="/dan-texts">Dan Texts</Nav.Link>
              <Nav.Link href="/pdfs">Vet Reports</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
