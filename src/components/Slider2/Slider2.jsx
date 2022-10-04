import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function Slider2(props) {
  return (
    <div className="home-slider-2">
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
            <div className="intro text-center">
              <h2>Women Collection 2018</h2>
              <span>New Arrivals</span>
              <button className="btn btn-primary">Shop Now</button>
            </div>
            <img src={props.imgs[0]} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-content">
            <div className="intro text-center">
              <h2>Men New-Season</h2>
              <span>Jackets & Coats</span>
              <button className="btn btn-primary">Shop Now</button>
            </div>
            <img src={props.imgs[1]} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-content">
            <div className="intro text-center">
              <h2>Men Collection 2018</h2>
              <span>New Arrivals</span>
              <button className="btn btn-primary">Shop Now</button>
            </div>
            <img src={props.imgs[2]} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider2;
