import React from "react";
import "./Home.css";
import Slide from "./Slide";
import Card from "./Card";
import men from "../image/men.jpg";
import Footer from "./Footer";
import Button from "@material-ui/core/Button";

const Home = () => {
  return (
    <>
      <header className="header">
        <main>
          <div className="text_div">
            <h2>A Variety of Dishes</h2>
            <h1>PIZZAS AND SEAFOOD</h1>
            <p>
              In our menu you can find lots of tasty and interesting dishes,
              including pizzas of all kinds. We also offer a wide range <br />
              of seafood dishes, even if you are just looking for an affordable
              snack.
            </p>
            <Button className="btn" variant="contained" href="/menu">
              Order Online
            </Button>
          </div>
        </main>
      </header>
      <Slide />
      <Card />
      <section className="offer_div">
        <div className="img_style">
          <img src={men} alt="" />
        </div>
        <div className="card2">
          <h1>Best Offer</h1>
          <h3>Greek Pizza</h3>

          <h6>
            <span style={{ color: "#f16121" }}>$29.00</span> $60.00
          </h6>
          <p>Enjoy the most popular pizza of Food Delivery.</p>
          <Button className="btn" variant="contained" href="/menu">
            Order Online
          </Button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
