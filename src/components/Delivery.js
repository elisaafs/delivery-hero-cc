import React from "react";
import { Link } from "react-router-dom";

import "./Delivery.css";

function Delivery() {
  return (
    <div className="Delivery-background">
      <img className="Delivery-logo" src="/images/Foodora-logo.png" alt="" />
      <div className="Delivery-name">
        <span className="Delivery-black">rainy</span> day?
      </div>
      <Link to="/order">
        <div className="Delivery-delivery">delivery</div>
      </Link>
    </div>
  );
}

export default Delivery;
