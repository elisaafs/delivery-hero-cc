import React from "react";
import { Link } from "react-router-dom";

import "./PickUp.css";

function PickUp() {
  return (
    <div className="PickUp-background">
      <img className="PickUp-logo" src="/images/Foodora-logo.png" alt="" />
      <div className="PickUp-name">
        <span className="Pickup-black">sunny</span> day?
      </div>
      <Link to="/order">
        <div className="PickUp-pickup">pickup</div>
      </Link>
    </div>
  );
}

export default PickUp;
