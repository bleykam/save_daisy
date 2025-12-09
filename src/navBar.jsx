
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return (
      <Nav justify variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="../src/assets/Dan_Pennny_Texts.html">Texts with Dan</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="../src/assets/Shayna_Penny_Texts.html">Texts with Shayna</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="../src/Penny_BluePearl_Pg1.png ">
        Blue Pearl Vet Report
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/bondVet">
        Bond Vet Report
      </Nav.Link>
    </Nav.Item>
  </Nav>
    )
}