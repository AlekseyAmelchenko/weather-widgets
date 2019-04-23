import React, { Component } from "react";
import { Weather, WeatherContainer } from "./weather";
import { WeatherWidget } from "./weather-widget";
import { Row } from "./styles";
import { WeatherAppConcept } from "./weatherapp";
import { WeatherBlueContainer } from "./weather-blue";

class App extends Component {
  render() {
    return <WeatherBlueContainer />;
  }
}

export default App;
