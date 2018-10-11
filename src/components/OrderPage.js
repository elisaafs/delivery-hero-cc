import React from "react";

import "./OrderPage.css";

function OrderPage() {
  return (
    <div className="OrderPage-main">
      <div className="OrderPage-background">
        <img className="OrderPage-burger" src="/images/burger.png" alt="" />
        <img className="OrderPage-iphone" src="/images/iphone.png" alt="" />
      </div>
      <div className="OrderPage-content">
        <img className="OrderPage-logo" src="/images/Foodora-logo.png" alt="" />
        <div className="OrderPage-name">
          <span className="OrderPage-black">order food</span> you love.
        </div>
        <a className="OrderPage-order" href="https://www.foodora.de">
          order now
        </a>
      </div>
    </div>
  );
}

export default OrderPage;
