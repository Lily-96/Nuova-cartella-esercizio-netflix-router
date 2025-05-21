import { Container, Row, Col, Button } from "react-bootstrap";
import { BsFacebook, BsInstagram, BsTwitterX, BsYoutube } from "react-icons/bs";

const linkGroups = [
  ["Audio and Subtitles", "Media Center", "Privacy", "Contact us"],
  ["Audio Description", "Investor Relations", "Legal Notices"],
  ["Help Center", "Jobs", "Cookie Preferences"],
  ["Gift Cards", "Terms of Use", "Corporate Information"],
];
const Footer = () => (
  <>
    <style>{`
    footer {
        background-color #221f1f; 
        color: #aaa; /* light gray text */
        padding: 2rem 0;
      }
      .footer-links a {
        font-size: 0.8rem;
        color: #6c757d; 
        text-decoration: none;
      }
      .footer-links a:hover {
        text-decoration: underline;
        color: #495057; 
      }
        .footer-links p {
        margin-bottom: 0.15rem; 
      margin-inline: rem;
      }
      .footer-icons {
        font-size: 1rem;
        color: #6c757d; 
      }
        .footer-button {
        background-color:#221f1f;
        color :  #6c757d ;
       
        }
        .finalText{
        color :  #6c757d ;
        }
        
    `}</style>
    <footer className=" text-light py-4">
      <Container className="row mt-5">
        <Row>
          <Col className="d-flex  justify-content-center ">
            <div>
              <div>
                <BsFacebook className=" mx-2 footer-icons" />
                <BsInstagram className="mx-2 footer-icons" />
                <BsTwitterX className="mx-2 footer-icons" />
                <BsYoutube className="mx-2 footer-icons" />
              </div>
              <div className="row  row-cols-sm-6 row-cols-md-6 justify-content-start text-center text-md-start me-2 mt-3">
                {" "}
                {linkGroups.map((group, idx) => (
                  <div key={idx} className="col footer-links">
                    {group.map((linkText, i) => (
                      <p key={i}>
                        <a href="#" alt="footer link">
                          {linkText}
                        </a>
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center me-2">
          <Col xs="auto">
            <Button variant="secondary" size="sm" className="rounded-0 footer-button">
              Service Code
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center me-2">
          <Col xs="auto" className="text-muted small mt-2 text-white">
            <p className="finalText"> © 1997–2023 Netflix, Inc.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  </>
);
export default Footer;
