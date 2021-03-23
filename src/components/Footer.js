import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import PhoneIcon from "@material-ui/icons/Phone";

const Footer = () => {
  return (
    <>
      <footer className="footer_style">
        <div className="search_box">
          <h2 className="heading">Subscribe</h2>
          <p>Get the latest updates and offers</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your Email"
          />
          <button>Subscribe</button>
        </div>
        <div className="icon">
          <h2>Follow Us</h2>
          <FacebookIcon className="icon_style" />
          <InstagramIcon className="icon_style" />
          <TwitterIcon className="icon_style" />
          <GitHubIcon className="icon_style" />
        </div>
        <div className="footer_contact">
          <h2>Contact Us</h2>

          <h4>
            
            <PhoneIcon /> +1 (409) 987–5874
          </h4>
          <p>We work every day 9:00–23:00</p>
        </div>
      </footer>
      <div className="copy_right">Food Delivery © 2021 Privacy Policy</div>
    </>
  );
};

export default Footer;
