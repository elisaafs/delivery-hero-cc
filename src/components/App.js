import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import PickUp from "./PickUp";
import Delivery from "./Delivery";
import OrderPage from "./OrderPage";
import WeatherRedirect from "./WeatherRedirect";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={WeatherRedirect} />
            <Route exact path="/pickup" component={PickUp} />
            <Route exact path="/delivery" component={Delivery} />
            <Route exact path="/order" component={OrderPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
