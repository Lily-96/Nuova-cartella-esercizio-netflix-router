import { Container, Nav, Navbar } from "react-bootstrap";
import "./TopBar.css";
import { BsSearch, BsBell, BsPerson, BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const TopBar = () => (
  <Navbar expand="lg" className="topbar">
    <Container fluid className="">
      <Navbar.Brand href="#">
        <img src="./public/logo.png" alt="Logo" style={{ width: "100px", height: "50px" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="/" className="navbar-link">
            Home
          </Link>
          <Link to="/tv-show" className="navbar-link">
            TV Shows
          </Link>
          <Link to="/" className="navbar-link">
            Movies
          </Link>
          <Link to="/" className="navbar-link">
            Recently Added
          </Link>
          <Link to="/" className="navbar-link">
            My List
          </Link>
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
