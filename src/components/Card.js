import React from "react";
import "./Card.css";
import image1 from "../image/food4.jpg";
import image2 from "../image/food5.jpg";
import image3 from "../image/food6.jpg";
import image4 from "../image/food7.jpg";
import image5 from "../image/food9.jpg";
import image6 from "../image/food10.jpg";
import image7 from "../image/food11.jpg";
const Card = () => {
  return (
    <>
      <section className="menu_div">
        <div>
          <h1>Our Menu</h1>
          <div className="card_div_style">
            <div
              className="card"
              style={{
                backgroundImage: `url(${image1})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h2>Sushi</h2>
            </div>
            <div
              className="card"
              style={{
                backgroundImage: `url(${image2})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h2>Burger</h2>
            </div>
            <div
              className="card"
              style={{
                backgroundImage: `url(${image3})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h2>Pizza</h2>
            </div>
          </div>
          <div
            className="card_div_style"
            style={{
              backgroundImage: `url(${image4})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="card"
              style={{
                backgroundImage: `url(${image5})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h2>Barbecue</h2>
            </div>
            <div
              className="card"
              style={{
                backgroundImage: `url(${image6})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h2>Sandwiches</h2>
            </div>
            <div
              className="card"
              style={{
                backgroundImage: `url(${image7})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h2>Tacos</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
