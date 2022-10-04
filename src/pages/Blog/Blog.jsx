import { Row, Container, Col } from "react-bootstrap";
import blogImg1 from "../../imgs/xblog-01.jpg.pagespeed.ic.uAX3n11Lyy.webp";
import blogImg2 from "../../imgs/xblog-02.jpg.pagespeed.ic.iVQjPEFoa1.webp";
import blogImg3 from "../../imgs/xblog-03.jpg.pagespeed.ic.MNUSpcjBgF.webp";
import { AiOutlineSearch } from "react-icons/ai";
import img1 from "../../imgs/download (2).webp";
import img2 from "../../imgs/download (3).webp";
import img3 from "../../imgs/download (4).webp";

function Blog() {
  return (
    <div className="blog-page page">
      <div className="landing">
        <h2>Blog</h2>
      </div>
      <div className="main-content">
        <Container>
          <Row>
            <Col lg="8" md="12">
              <div className="left">
                <div className="our-blogs">
                  <div className="box">
                    <img src={blogImg1} alt="" />
                    <div className="info">
                      <span>By Nancy Ward on July 22, 2017</span>
                      <button>
                        8 Inspiring Ways to Wear Dresses in the Winter
                      </button>
                      <p>
                        Duis ut velit gravida nibh bibendum commodo. Suspendisse
                        pellentesque mattis augue id euismod. Interdum et
                        male-suada fames
                      </p>
                    </div>
                  </div>
                  <div className="box">
                    <img src={blogImg2} alt="" />
                    <div className="info">
                      <span>By Nancy Ward on July 18, 2017</span>
                      <button>
                        The Great Big List of Men’s Gifts for the Holidays
                      </button>
                      <p>
                        Nullam scelerisque, lacus sed consequat laoreet, dui
                        enim iaculis leo, eu viverra ex nulla in tellus. Nullam
                        nec ornare tellus, ac fringilla lacus. Ut sit ame
                      </p>
                    </div>
                  </div>
                  <div className="box">
                    <img src={blogImg3} alt="" />
                    <div className="info">
                      <span>By Nancy Ward on July 2, 2017</span>
                      <button>
                        5 Winter-to-Spring Fashion Trends to Try Now
                      </button>
                      <p>
                        Proin nec vehicula lorem, a efficitur ex. Nam vehicula
                        nulla vel erat tincidunt, sed hendrerit ligula
                        porttitor. Fusce sit amet maximus nunc
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="12">
              <div className="right">
                <div className="search">
                  <input type="text" placeholder="search" />
                  <AiOutlineSearch />
                </div>
                <div className="catergories">
                  <h2>Categories</h2>
                  <ul className="list-unstyled">
                    <li>Fashion</li>
                    <li>Beauty</li>
                    <li>Street Style</li>
                    <li>Life Style</li>
                    <li>DIY & Crafts</li>
                  </ul>
                </div>
                <div className="featured-products">
                  <h2>Featured Products</h2>
                  <div className="product">
                    <img src={img1} alt="" />
                    <div className="info">
                      <button>White Shirt With Pleat Detail Back</button>
                      <span>$19.00</span>
                    </div>
                  </div>
                  <div className="product">
                    <img src={img2} alt="" />
                    <div className="info">
                      <button>Converse All Star Hi Black Canvas</button>
                      <span>$39.00</span>
                    </div>
                  </div>
                  <div className="product">
                    <img src={img3} alt="" />
                    <div className="info">
                      <button>Nixon Porter Leather Watch In Tan</button>
                      <span>$17.00</span>
                    </div>
                  </div>
                </div>
                <div className="archive">
                  <h2>Archive</h2>
                  <ul className="list-unstyled">
                    <li>
                      <span>July 2018</span>
                      <span>(9)</span>
                    </li>
                    <li>
                      <span>June 2018</span>
                      <span>(39)</span>
                    </li>
                    <li>
                      <span>May 2018</span>
                      <span>(29)</span>
                    </li>
                    <li>
                      <span>April 2018</span>
                      <span>(35)</span>
                    </li>
                    <li>
                      <span>March 2018</span>
                      <span>(22)</span>
                    </li>
                    <li>
                      <span>February 2018</span>
                      <span>(32)</span>
                    </li>
                    <li>
                      <span>January 2018</span>
                      <span>(21)</span>
                    </li>

                    <li>
                      <span>December 2017</span>
                      <span>(26)</span>
                    </li>
                  </ul>
                </div>
                <div className="tags">
                  <h2>Tags</h2>
                  <ul className="list-unstyled">
                    <li>Fashion</li>
                    <li>Lifestyle</li>
                    <li>Denim</li>
                    <li>Streetstyle</li>
                    <li>Crafts</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Blog;
