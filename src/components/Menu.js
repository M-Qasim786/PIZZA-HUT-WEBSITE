import React from "react";
import "./Menu.css";
import Button from "@material-ui/core/Button";
import Footer from "./Footer";
const Menu = () => {
  return (
    <>
      <div className="menu_style">
        <div className="main">
          <hr className="divider" />
          <h1>Menu</h1>
          <hr className="divider" />
        </div>
      </div>
      <section className="menu_section_div">
        <div className="menues">
          <div className="menu1">
            <h4>
              Tuna
              Salad........................................................................................$25.00
            </h4>
            <p>Lettuce/Tomatoes/Tuna/Grain toast</p>
            <h4>
              Uptown Turkey
              Avocado.....................................................$15.00
            </h4>
            <p>Smoked turkey breast/Applewood smoked bacon/Avocado</p>
            <h4>
              Tomato
              Mozarella.....................................................................$07.00
            </h4>
            <p>Roasted red peppers/Arugula/Balsamic vinaigrette</p>
            <h4>
              Chicken
              Pesto...............................................................................$23.00
            </h4>
            <p>All natural chicken/Arugula/Tomatoes</p>
          </div>
          <div className="menu2">
            <h4>
              Ham&Swiss
              Pretzel.....................................................$23.00
            </h4>
            <p>Smoked ham/Shaved red onions/Swiss cheese/Tomatoes</p>
            <h4>
              D.C Chicken
              Salad..........................................................$15.00
            </h4>
            <p>All natural chicken/Green apple/Celery</p>
            <h4>
              Roast Beef
              Cheddar....................................................$09.00
            </h4>
            <p>Roast beef/Cheddar cheese/Lettuce</p>
            <h4>
              Double
              BLT............................................................................$30.00
            </h4>
            <p>French fries/Onion rings/Hash brown</p>
          </div>
        </div>
      </section>
      <div className="button">
        <Button className="menu_btn" variant="contained" href="/menu">
          Download Full Menu
        </Button>
      </div>
      <section className="delivery_style">
        <div className="delivery">
          <h1>Fast Delivery</h1>
          <p>Enjoy our free, fast, and reliable delivery service.</p>
          <Button className="delivery_btn" variant="contained" href="/menu">
            Learn More
          </Button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Menu;
