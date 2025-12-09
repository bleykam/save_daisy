import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import NavBar from "./navBar.jsx";
import Penny from "./assets/Penny_head.png";
import ContainerTop from "./top_container.jsx";
import Shayna from "./assets/Shayna_Head.png";
import Daniel from "./assets/dr_dan_kim.jpg";
import PdfPage from "./PdfPage.jsx";

const HOME_PATH = "/";
const PDF_PATH = "/pdfs";

function HomePage() {
  return (
    <>
      <Container fluid className="my-md-3">
        <Row className="d-md-flex flex-md-equal w-100">
          {/* Left column */}
          <Col
            md
            className="bg-dark pt-1 px-2 pt-md-2 px-md-2 text-center text-white overflow-hidden me-md-3"
          >
            <div className="my-3 py-3">
              <h2 className="text-white">Dr. Daniel Kim</h2>
            </div>
            <div
              className="bg-light shadow mx-auto"
              style={{
                width: "90%",
                borderRadius: "21px 21px 0 0",
              }}
            >
              <Image src={Daniel} fluid />
            </div>
          </Col>

          {/* Middle column */}
          <Col
            md
            className="bg-light pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden"
          >
            <div className="my-3 p-3">
              <h2 className="text-black">Penny (Daisy)</h2>
            </div>
            <div
              className="bg-light shadow mx-auto"
              style={{
                width: "90%",
                borderRadius: "21px 21px 0 0",
              }}
            >
              <Image src={Penny} fluid />
            </div>
          </Col>
          {/* Right column */}
          <Col
            md
            className="bg-dark pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden me-md-3"
          >
            <div className="my-3 py-3">
              <h2 className="text-white">Shayna Davies</h2>
            </div>
            <div
              className="bg-light shadow mx-auto"
              style={{
                width: "90%",
                borderRadius: "21px 21px 0 0",
              }}
            >
              <Image src={Shayna} fluid />
            </div>
          </Col>
        </Row>
      </Container>

      <ContainerTop />
    </>
  );
}

export default function App() {
  const [currentPath, setCurrentPath] = useState(() =>
    window.location.pathname === PDF_PATH ? PDF_PATH : HOME_PATH
  );

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname === PDF_PATH ? PDF_PATH : HOME_PATH);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path) => {
    const normalizedPath = path === PDF_PATH ? PDF_PATH : HOME_PATH;
    if (normalizedPath === currentPath) return;
    window.history.pushState({}, "", normalizedPath);
    setCurrentPath(normalizedPath);
    window.scrollTo(0, 0);
  };

  const isPdfPage = currentPath === PDF_PATH;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="display-1 fw-bold mb-4">SAVE PENELOPE</h1>
      <NavBar currentPath={currentPath} onNavigate={navigate} />
      {isPdfPage ? <PdfPage /> : <HomePage />}
    </div>
  );
}
