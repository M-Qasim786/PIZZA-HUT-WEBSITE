import React from "react";
import "./Slide.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import img from "../image/food1.jpg";
import img2 from "../image/food2.jpg";
import img3 from "../image/food3.jpg";
const Slide = () => {
  return (
    <>
      <section className="section">
        <div className="text_style">
          <h1>Welcome to Food Delivery</h1>
          <p>
            Food Delivery is the best way to find local restaurants that deliver
            to you or quickly order food online . Whether looking <br /> for
            breakfast, lunch, dinner or late night snack, we have it all.
          </p>
        </div>
        <div className="slider_style">
          <Slider>
            <img src={img} />
            <img src={img2} />
            <img src={img3} />
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Slide;
