import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import img1 from "../../imgs/icons/xicon-pay-01.png.pagespeed.ic.x3ksseq-Ro.webp";
import img2 from "../../imgs/icons/xicon-pay-02.png.pagespeed.ic.VV76jih-LZ.webp";
import img3 from "../../imgs/icons/xicon-pay-03.png.pagespeed.ic.qm10pI94h8.webp";
import img4 from "../../imgs/icons/xicon-pay-04.png.pagespeed.ic.afX_pRP1xW.webp";
import img5 from "../../imgs/icons/xicon-pay-05.png.pagespeed.ic.j9rtlz4R-L.webp";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg="3" md="6" sm="12">
            <div className="links">
              <h2>Categories</h2>
              <ul className="list-unstyled">
                <li>Women</li>
                <li>Men</li>
                <li>Shoes</li>
                <li>Watches</li>
              </ul>
            </div>
          </Col>

          <Col lg="3" md="6" sm="12">
            <div className="links-help">
              <h2>Help</h2>
              <ul className="list-unstyled">
                <li>Track Order</li>
                <li>Returns</li>
                <li>Shipping</li>
                <li>FAQS</li>
              </ul>
            </div>
          </Col>

          <Col lg="3" md="6" sm="12">
            <div className="links">
              <h2>Get In Touch</h2>
              <p>
                Any questions? Let us know in store at 8th floor, 379 Hudson St,
                New York, NY 10018 or call us on (+1) 96 716 6879
              </p>
              <ul className="list-unstyled social-icons">
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <AiOutlineInstagram />
                </li>
                <li>
                  <FaPinterestP />
                </li>
              </ul>
            </div>
          </Col>

          <Col lg="3" md="6" sm="12">
            <div className="links">
              <h2>NewsLetter</h2>
              <input type="email" placeholder="email@example.com" />
              <button className="btn btn-primary">SUBSCRIPE</button>
            </div>
          </Col>
        </Row>
        <div className="copyright">
          <div className="info ms-auto text-center">
            <ul className="list-unstyled d-flex justify-content-center gap-1">
              <li>
                <img src={img1} alt="" />
              </li>
              <li>
                <img src={img2} alt="" />
              </li>
              <li>
                <img src={img3} alt="" />
              </li>
              <li>
                <img src={img4} alt="" />
              </li>
              <li>
                <img src={img5} alt="" />
              </li>
            </ul>
            <p className="m-0">
              Copyright ©2022 All rights reserved | This template is made with
              by <span>Colorlib</span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
