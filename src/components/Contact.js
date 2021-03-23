import React from "react";
import "./Contact.css";
import Footer from "./Footer";
const Contact = () => {
  return (
    <>
      <div className="contact_section">
        <div className="contact_text">
          <hr className="divider" />
          <h1>Contact Us</h1>
          <hr className="divider" />
        </div>
      </div>
      <div className="contact_box">
        <h2>Get in Touch</h2>
        <p>
          We are available 24/7 by fax, e-mail or by phone. You can also use our
          quick contact form to ask a question about our services that <br /> we
          offer on a regular basis. We would be pleased to answer your
          questions.
        </p>
        <div className="form_box">
          <form className="form">
            <label htmlFor="name">First Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
            />
          </form>
          <form className="form">
            <label htmlFor="phone">Phone</label>
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="Enter Your Phone"
            />
          </form>
          <form className="form">
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your email"
            />
          </form>
          <form className="form">
            <label htmlFor="message">Your Message</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter your message here"
            ></textarea>
          </form>
          <button className="submit_btn">Send Message</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
