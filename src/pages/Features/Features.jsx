import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../imgs/download.webp";
import img2 from "../../imgs/download (1).webp";

function Features() {
  return (
    <div className="feature-page page">
      <Container>
        <h2 className="fs-6">
          <a href="/homepage1">Home</a> Shoping Cart{" "}
        </h2>
        <Row>
          <Col lg="8" md="12">
            <div className="left">
              <ul className="list-unstyled top-links">
                <li>Product</li>
                <li style={{ marginLeft: "5rem" }}>Price</li>
                <li>Quantity</li>
                <li>Total</li>
              </ul>
              <div className="product-info">
                <ul className="list-unstyled ">
                  <li className="imgs">
                    <img src={img1} alt="" />
                    <span>Fresh Strawberries</span>
                  </li>
                  <li>$36.00</li>
                  <li className="buttons">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </li>
                  <li>$ 36.00</li>
                </ul>
              </div>
              <div className="product-info">
                <ul className="list-unstyled">
                  <li className="imgs">
                    <img src={img2} alt="" />
                    <span>Fresh Strawberries</span>
                  </li>
                  <li>$36.00</li>
                  <li className="buttons">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </li>
                  <li>$ 36.00</li>
                </ul>
              </div>
              <div className="buy-section">
                <ul className="list-unstyled">
                  <li>
                    <input type="text" placeholder="Coupon Code" />
                  </li>
                  <li>
                    <button className="btn btn-default">Applay Coupon</button>
                  </li>

                  <li>
                    <button className="btn btn-default">Update Cart</button>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg="4" md="12">
            <div className="right">
              <h2>Cart Totals</h2>
              <div className="sub-total">
                <span>Subtotal:</span>
                <span>$79.65</span>
              </div>
              <div className="cart-info">
                <Row>
                  <Col lg="4">
                    <h2>Shipping:</h2>
                  </Col>
                  <Col lg="8">
                    <p>
                      There are no shipping methods available. Please double
                      check your address, or contact us if you need any help.
                    </p>
                    <span>CALCULATE SHIPPING</span>
                    <select>
                      <option value={0}>Select a Countery</option>
                      <option value={1}>USA</option>
                      <option value={0}>UK</option>
                    </select>
                    <input type="text" placeholder="State / country" />
                    <input type="text" placeholder="Postcode / Zip" />
                    <button className="btn btn-default">Update Totals</button>
                  </Col>
                </Row>
              </div>
              <div className="cart-bottom">
                <div>
                  <span>Total:</span>
                  <span>$79.64</span>
                </div>
                <button className="btn ">Proceed To Checkout</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Features;
