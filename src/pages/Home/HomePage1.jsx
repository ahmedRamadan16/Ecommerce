import { Col, Row, Container } from "react-bootstrap";
import HomeCard from "../../components/HomeCard/HomeCard";
import Slider from "../../components/Slider/Slider";
import xBanner01 from "../../imgs/xbanner-01.jpg.pagespeed.ic.Uj5FE94mgU.webp";
import xBanner02 from "../../imgs/xbanner-02.jpg.pagespeed.ic.MQuZq6F18q.webp";
import xBanner03 from "../../imgs/xbanner-03.jpg.pagespeed.ic.1rqLomOaMb.webp";

import { useState } from "react";
import sliderImg1 from "../../imgs/xslide-01.jpg.pagespeed.ic.XotvXKn0Mi.webp";
import sliderImg2 from "../../imgs/xslide-02.jpg.pagespeed.ic.__MQeyG5T4.webp";
import sliderImg3 from "../../imgs/xslide-03.jpg.pagespeed.ic.tP-L47NU9M.webp";
import Products from "../../components/ProductsSection/Products";
const imgs = [sliderImg1, sliderImg2, sliderImg3];
function HomePage1() {
  const [isFilterOpen, SetIsFilterOpen] = useState(false);
  const [isSerachOpen, SetIsSearchOpen] = useState(false);
  const [currentProducts, SetCurrentProducts] = useState("all");
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
      title: "Accessories",
      span: "New Trind",
      btitle: "Shop Now"
    }
  ];

  return (
    <div className="home-page-1 page">
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
      <Products />
    </div>
  );
}

export default HomePage1;
