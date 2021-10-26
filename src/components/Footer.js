import { Container, Row, Col } from "react-bootstrap";
import '../App.css';
function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
        <Row>
        <Col md="4" className="footer-copywright">
                <h3>Copyright © {year}</h3>
              </Col>
              <Col md="4" className="footer-copywright">
                <h3>Harshada Jog</h3>

              </Col>
             
        </Row>
             </Container> 
    )}
export default Footer;