import Slider2 from "../../components/Slider2/Slider2";
import sliderImg1 from "../../imgs/xslide-05.jpg.pagespeed.ic.qfhdiU1qnW.webp";
import sliderImg2 from "../../imgs/xslide-06.jpg.pagespeed.ic.wPI-RILPEg.webp";
import sliderImg3 from "../../imgs/xslide-07.jpg.pagespeed.ic.hmaiIdWtK7.webp";
import HomeCard from "../../components/HomeCard/HomeCard";
import xBanner01 from "../../imgs/xbanner-01.jpg.pagespeed.ic.Uj5FE94mgU.webp";
import xBanner02 from "../../imgs/xbanner-02.jpg.pagespeed.ic.MQuZq6F18q.webp";
import xBanner07 from "../../imgs/xbanner-07.jpg.pagespeed.ic.Kb4B472Pn9.webp";
import xBanner08 from "../../imgs/xbanner-08.jpg.pagespeed.ic.Lo-wLsaWt0.webp";
import xBanner09 from "../../imgs/xbanner-09.jpg.pagespeed.ic.BOBoCfd_Jc.webp";
import { Col, Row, Container } from "react-bootstrap";
import Products from "../../components/ProductsSection/Products";
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
  }
];
const cardData2 = [
  {
    img: xBanner07,
    title: "Watches",
    span: "Spring 2018",
    btitle: "Shop Now"
  },
  {
    img: xBanner08,
    title: "Bags",
    span: "Spring 2018",
    btitle: "Shop Now"
  },

  {
    img: xBanner09,
    title: "Accessories",
    span: "Spring 2018",
    btitle: "Shop Now"
  }
];
const imgs = [sliderImg1, sliderImg2, sliderImg3];
function HomePage3() {
  return (
    <div className="home-page-3 page">
      <Slider2 imgs={imgs} />
      <ul className="list-unstyled slider-pagination">
        <li>
          <img src={sliderImg1} alt="" />
          <h2>Women's Wear</h2>
        </li>
        <li>
          <img src={sliderImg2} alt="" />
          <h2>Men's Wear</h2>
        </li>
        <li>
          <img src={sliderImg3} alt="" />
          <h2>Men's Wear</h2>
        </li>
      </ul>
      <div className="home-cards">
        <Container>
          <Row>
            {cardData.map(({ img, title, span, btitle }) => {
              return (
                <Col key={Math.random()} lg="6" md="6" sm="12">
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
      <div className="home-cards">
        <Container>
          <Row>
            {cardData2.map(({ img, title, span, btitle }) => {
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
      <Products />
    </div>
  );
}

export default HomePage3;
