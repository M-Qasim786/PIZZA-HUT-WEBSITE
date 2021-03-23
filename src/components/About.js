import React from "react";
import "./About.css";
import boy from "../image/boy.jpg";
import boy2 from "../image/boy2.jpg";
import pic2 from "../image/pic2.jpg";
import pic from "../image/pic.jpg";
import logo1 from "../image/logo1.jpg";
import logo2 from "../image/logo2.jpg";
import logo3 from "../image/logo3.jpg";
import logo4 from "../image/logo4.jpg";
import team1 from '../image/team1.png';
import team2 from '../image/team2.png';
import team4 from '../image/team4.jpg';
import Button from "@material-ui/core/Button";
import Footer from "./Footer";
const About = () => {
  return (
    <>
      <div className="about_style">
        <div className="main">
          <hr className="divider" />
          <h1>About Us</h1>
          <hr className="divider" />
        </div>
        <section className="about_section_style">
          <div className="about_img_style">
            <img src={boy} alt="" />
          </div>
          <div className="about_text_style">
            <h2>A Few Words About Food Delivery</h2>
            <p>
              Food Delviery, one of today’s most renowned food delviery
              services, was established in 2013, as a quick and secure method to
              order something for anyone with any taste - from burger lovers to
              fans of sushi and seafood.
            </p>
            <h1>
              20 ORDERS MADE
              <span style={{ color: "green" }}>1300 PIZZAS DELIVERED</span>
              CLIENTS EVERYDAY
            </h1>
            <Button className="about_btn" variant="contained" href="/menu">
              See Our Menu
            </Button>
          </div>
        </section>
        <div className="story_div">
          <h1>Our Story</h1>
          <h4>2010</h4>
        </div>

        <section className="idea_style">
          <div className="idea">
            <h2>Idea</h2>
            <p>
              It all started from a single idea. We wanted to create a place
              that would offer its customers easy ordering and delivery of their
              favorite dishes. It all started from a single idea. We wanted to
              create a place that would offer its customers easy ordering and
              delivery of their favorite dishes.
            </p>
          </div>
          <div className="image">
            <img src={boy2} alt="" />
          </div>
        </section>
        <div className="story_div">
          <h4>2016</h4>
        </div>
        <section className="idea_style">
          <div className="image">
            <img src={pic2} alt="" />
          </div>
          <div className="idea">
            <h2>Opening</h2>
            <p>
              After making necessary preparations, completing our staff with
              experienced people, we were ready for new guests and clients.
              After making necessary preparations, completing our staff with
              experienced people, we were ready for new guests and clients.
            </p>
          </div>
        </section>
        <div className="story_div">
          <h4>2021</h4>
        </div>
        <section className="idea_style">
          <div className="idea">
            <h2>Today</h2>
            <p>
              We are devoted to our customers and to business of our life -
              quick and secure food delivery. And that’s why today we’re
              recognized as #1 in the industry. quick and secure food delivery.
              And that’s why today we’re recognized as #1 in the industry.
            </p>
          </div>
          <div className="image">
            <img src={pic} alt="" />
          </div>
        </section>
        <section className="partner">
          <div className="overlay">
            <h1>Our Partners</h1>
            <p>
              We are glad to offer our visitors high-quality burgers and pizzas,
              but we also believe our whole business <br /> couldn’t be
              successful without our partners.
            </p>
            <div className="logos">
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />
              <img src={logo4} alt="" />
            </div>
          </div>
        </section>
        <section className="team">
          <h1>Meet Our Team</h1>
          <p>
            Our team is what marks us out from other delivery services. Everyone
            of us, from founders to couriers, <br/> is a part of a friendly family
            that always welcomes new members!
          </p>
          <div className="member">
            <img src={team1} alt=""/>
            <img src={team2} alt=""/>
            <img src={team4} alt=""/>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default About;
