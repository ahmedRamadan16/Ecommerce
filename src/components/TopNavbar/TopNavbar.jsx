import { Col, Container, Row } from "react-bootstrap";

function TopNavbar() {
  return (
    <div className="top-nav">
      <Container>
        <Row>
          <Col lg="6" md="12">
            <div className="left">
              <h5>Free shipping for standard order over $100</h5>
            </div>
          </Col>
          <Col lg="6" md="12">
            <div className="right">
              <ul className="list-unstyled">
                <li>Help & FAQS</li>
                <li>My Account</li>
                <li>EN</li>
                <li>USD</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TopNavbar;
