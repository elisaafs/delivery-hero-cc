import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

import "./WeatherRedirect.css";
import config from "../configuration/config";

const { openWeatherMap } = config;

class WeatherRedirect extends React.Component {
  state = {
    temperature: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      axios
        .get(
          `${
            openWeatherMap.getWeatherUrl
          }?lat=${latitude}&lon=${longitude}&APPID=${
            openWeatherMap.apiKey
          }&units=metric`
        )
        .then(res => {
          const temp = res.data.main.temp;
          this.setState({ temperature: temp });
        });
    });
  }

  render() {
    if (this.state.temperature === null) {
      return (
        <div className="WeatherRedirect-message">
          Please wait, we are checking your weather...
        </div>
      );
    }

    if (this.state.temperature >= 20) {
      return <Redirect to="/pickup" />;
    }

    return <Redirect to="/delivery" />;
  }
}

export default WeatherRedirect;
