import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function Slider(props) {
  return (
    <div className="home-slider">
      <Swiper
        updateOnWindowResize="true"
        loop="true"
        speed={500}
        autoplay={{ delay: 1000 }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider-content">
            <div className="left">
              <span>Women Collection 2018</span>
              <h4>NEW SEASON</h4>
              <button className="btn btn-primary">shop now</button>
            </div>
            <div className="right">
              <img src={props.imgs[0]} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-content">
            <div className="left">
              <span>Men New-Season</span>
              <h4>Jackets & Coats</h4>
              <button className="btn btn-primary">shop now</button>
            </div>
            <div className="right">
              <img src={props.imgs[1]} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-content">
            <div className="left">
              <span>Men Collection 2018</span>
              <h4>NEW Arrivals</h4>
              <button className="btn btn-primary">shop now</button>
            </div>
            <div className="right">
              <img src={props.imgs[2]} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
