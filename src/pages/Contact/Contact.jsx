import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import {
  HiOutlineLocationMarker,
  HiOutlinePhoneMissedCall
} from "react-icons/hi";
function Contact() {
  return (
    <div className="contact-page page">
      <div className="landing">
        <h2>Contact</h2>
      </div>
      <div className="contact-us">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <div className="left p-4 text-center">
                <h2>Send Us A Message</h2>
                <div className="email">
                  <AiOutlineMail />
                  <input type={"email"} placeholder="email" />
                </div>
                <textarea cols="8" rows="6" placeholder="How Can We Help" />
                <button className="btn">Submit</button>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="right p-4">
                <div className="box">
                  <HiOutlineLocationMarker />
                  <div className="info">
                    <h4>Address</h4>
                    <p>
                      Coza Store Center 8th floor, 379 Hudson St, New York, NY
                      10018 US
                    </p>
                  </div>
                </div>
                <div className="box">
                  <HiOutlinePhoneMissedCall />
                  <div className="info">
                    <h4>Lets Talk</h4>
                    <p>+1 800 1236879</p>
                  </div>
                </div>
                <div className="box">
                  <AiOutlineMail />
                  <div className="info">
                    <h4>Sale Support</h4>
                    <p>contact@example.com</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
