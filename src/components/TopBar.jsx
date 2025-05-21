import { Container, Nav, Navbar } from "react-bootstrap";
import "./TopBar.css";
import { BsSearch, BsBell, BsPerson, BsPersonCircle } from "react-icons/bs";

const TopBar = () => (
  <Navbar expand="lg" className="topbar">
    <Container fluid>
      <Navbar.Brand href="#">
        <img src="./public/logo.png" alt="Logo" style={{ width: "100px", height: "50px" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#" className="navbar-text">
            Home
          </Nav.Link>
          <Nav.Link href="#" className="navbar-text">
            TV Shows
          </Nav.Link>
          <Nav.Link href="#" className="navbar-text">
            Movies
          </Nav.Link>
          <Nav.Link href="#" className="navbar-text">
            Recently Added
          </Nav.Link>
          <Nav.Link href="#" className="navbar-text">
            My List
          </Nav.Link>
        </Nav>
        <div className="topbar-icons d-flex align-items-center gap-3">
          <BsSearch color="white" />
          <span className="kids-label navbar-text">KIDS</span>
          <BsBell color="white" />
          <BsPersonCircle color="white" />
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default TopBar;
