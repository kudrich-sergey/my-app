
import React, { Component } from "react";
import Slider from "react-slick";

export default class TestSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div  className="slider">
        <Slider {...settings}>
          <div>
          <img width={450} src="./img/N-1170_6852.jpg"/>
          </div>
          <div>
          <img width={450} src="./img/TA_TEZPlus_India_1170x400-min_8441_8995.jpg"/>
          </div>
          <div>
          <img width={450} src="./img/E-1170_240_8747.jpg"/>
          </div>
          <div>
          <img width={450} src="./img/TA_TEZPlus_SAR_1170x400-min_6243_2273.jpg"/>
          </div>
        </Slider>
      </div>
    );
  }
}