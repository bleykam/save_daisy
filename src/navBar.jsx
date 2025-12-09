import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";

const HOME_PATH = "/";
const PDF_PATH = "/pdfs";

export default function NavBar({ currentPath = HOME_PATH, onNavigate }) {
  const handleNavigate = (event, path) => {
    if (!onNavigate) return;
    event.preventDefault();
    onNavigate(path);
  };

  return (
    <Nav justify variant="tabs" activeKey={currentPath}>
      <Nav.Item>
        <Nav.Link href={HOME_PATH} active={currentPath === HOME_PATH} onClick={(e) => handleNavigate(e, HOME_PATH)}>
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="../src/assets/Dan_Pennny_Texts.html">Texts with Dan</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="../src/assets/Shayna_Penny_Texts.html">Texts with Shayna</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={PDF_PATH} active={currentPath === PDF_PATH} onClick={(e) => handleNavigate(e, PDF_PATH)}>
          Vet Reports
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
