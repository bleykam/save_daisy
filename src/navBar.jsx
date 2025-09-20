
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return (
      <Nav justify variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Active</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="../src/assets/Dan_Pennny_Texts.html">Texts with Dan</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="../src/assets/Shayna_Penny_Texts.html">Texts with Shayna</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="save_penelope/src/assets/Penny_Blue_Pearl.pdf">
        Blue Pearl Vet Report
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="save_penelope/src/assets/Penny_Bond_Vet.pdf">
        Bond Vet Report
      </Nav.Link>
    </Nav.Item>
  </Nav>
    )
}