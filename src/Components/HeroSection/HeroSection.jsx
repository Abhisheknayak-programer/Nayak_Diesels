import React from "react";
import "./HeroSection.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <div className="herosection">
      <div className="herosection__content">
        <h3>Nayak Diesels Welcomes You.</h3>
        <h1>Exclusive & Authorized Service for All DG Sets</h1>
        <h2>Expert repairs to keep your generators running smoothly.</h2>
        <p>
          Bringing the Best, Reliable Generator maintenance & services at your
          doorstep, thus making it more accessible to our customers.
        </p>
        <button className="hero___sec_btn">Contact Us Now</button>
      </div>
      <div className="herosection__images">
        <Slider {...settings}>
          <img
            className="herosection__slides"
            src="./main_carousel/1.webp"
            alt="dg set"
          />

          <img
            className="herosection__slides"
            src="./main_carousel/2.jpeg"
            alt="dg set"
          />

          <img
            className="herosection__slides"
            src="./main_carousel/4.jpeg"
            alt="dg set"
          />

          <img
            className="herosection__slides"
            src="./main_carousel/5.png"
            alt="dg set"
          />

          <img
            className="herosection__slides"
            src="./main_carousel/6.webp"
            alt="dg set"
          />

          <img
            className="herosection__slides"
            src="./main_carousel/3.jpg"
            alt="dg set"
          />
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
