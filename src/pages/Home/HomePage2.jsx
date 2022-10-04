import Slider from "../../components/Slider/Slider";
import { Container, Row, Col } from "react-bootstrap";
import xBanner01 from "../../imgs/xbanner-01.jpg.pagespeed.ic.Uj5FE94mgU.webp";
import xBanner02 from "../../imgs/xbanner-02.jpg.pagespeed.ic.MQuZq6F18q.webp";
import xBanner03 from "../../imgs/xbanner-06.jpg.pagespeed.ic.xInTkoQHV8.webp";
import HomeCard from "../../components/HomeCard/HomeCard";
import products from "../../product-data";
import ProductCard from "../../components/ProductCard/ProductCard";
import blogImg1 from "../../imgs/xblog-01.jpg.pagespeed.ic.uAX3n11Lyy.webp";
import blogImg2 from "../../imgs/xblog-02.jpg.pagespeed.ic.iVQjPEFoa1.webp";
import blogImg3 from "../../imgs/xblog-03.jpg.pagespeed.ic.MNUSpcjBgF.webp";
import sliderImg1 from "../../imgs/xslide-04.jpg.pagespeed.ic.nzpNBNwBfa.webp";
import sliderImg2 from "../../imgs/xslide-02.jpg.pagespeed.ic.__MQeyG5T4.webp";
import sliderImg3 from "../../imgs/xslide-03.jpg.pagespeed.ic.tP-L47NU9M.webp";
const imgs = [sliderImg1, sliderImg2, sliderImg3];
function HomePage2() {
  const cardData = [
    {
      img: xBanner01,
      title: "Women",
      span: "Spring 2018",
      btitle: "Shop Now"
    },
    {
      img: xBanner02,
      title: "Men",
      span: "Spring 2018",
      btitle: "Shop Now"
    },
    {
      img: xBanner03,
      title: "Bags",
      span: "New Trind",
      btitle: "Shop Now"
    }
  ];
  return (
    <div className="home-page-2 page">
      <Slider imgs={imgs} />
      <div className="home-cards">
        <Container>
          <Row>
            {cardData.map(({ img, title, span, btitle }) => {
              return (
                <Col key={Math.random()} lg="4" md="6" sm="12">
                  <HomeCard
                    img={img}
                    title={title}
                    span={span}
                    btitle={btitle}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <div className="store-overview">
        <Container>
          <h2 className="text-center fw-bold text-uppercase">Store Overview</h2>
          <ul className="list-unstyled d-flex justify-content-center  gap-3">
            <li className="active">Best Seller</li>
            <li>Featured</li>
            <li>Sale</li>
            <li>Top Rate</li>
          </ul>
          <Row>
            {products.map(({ img, title, price, type }, index) => {
              if (index > 3) {
                return false;
              } else {
                return (
                  <Col key={Math.random()} lg="3" md="6" sm="12">
                    <ProductCard img={img} title={title} price={price} />
                  </Col>
                );
              }
            })}
          </Row>
        </Container>
      </div>
      <div className="our-blogs">
        <div className="container">
          <Row>
            <Col lg="4" md="6" sm="12">
              <div className="box">
                <img src={blogImg1} alt="" />
                <div className="info">
                  <span>By Nancy Ward on July 22, 2017</span>
                  <button>
                    8 Inspiring Ways to Wear Dresses in the Winter
                  </button>
                  <p>
                    Duis ut velit gravida nibh bibendum commodo. Suspendisse
                    pellentesque mattis augue id euismod. Interdum et male-suada
                    fames
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12">
              <div className="box">
                <img src={blogImg2} alt="" />
                <div className="info">
                  <span>By Nancy Ward on July 18, 2017</span>
                  <button>
                    The Great Big List of Men’s Gifts for the Holidays
                  </button>
                  <p>
                    Nullam scelerisque, lacus sed consequat laoreet, dui enim
                    iaculis leo, eu viverra ex nulla in tellus. Nullam nec
                    ornare tellus, ac fringilla lacus. Ut sit ame
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12">
              <div className="box">
                <img src={blogImg3} alt="" />
                <div className="info">
                  <span>By Nancy Ward on July 2, 2017</span>
                  <button>5 Winter-to-Spring Fashion Trends to Try Now</button>
                  <p>
                    Proin nec vehicula lorem, a efficitur ex. Nam vehicula nulla
                    vel erat tincidunt, sed hendrerit ligula porttitor. Fusce
                    sit amet maximus nunc
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default HomePage2;
