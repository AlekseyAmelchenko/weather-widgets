import React, { Component } from "react";
import {
  Container,
  TopBlock,
  Label,
  RightBlock,
  Place,
  Time,
  IconContainer,
  IconWeather,
  Icon,
  TextWeather,
  FooterContainer,
  Temperature,
  Day,
  Today,
  TodayContainer,
  Line,
  WeekContainer,
  DayWeekContainer,
  Temp,
  IconWeek
} from "./styles";
import cloud from "../svg/cloud-weather-blue.svg";

const week = [
  {
    day: "Tue",
    weather: "sun",
    temp: "31"
  },
  {
    day: "Wed",
    weather: "cloud",
    temp: "30"
  },
  {
    day: "Thu",
    weather: "cloud",
    temp: "33"
  },
  {
    day: "Fri",
    weather: "cloud-rain",
    temp: "32"
  },
  {
    day: "Sat",
    weather: "cloud-sun",
    temp: "33"
  },
  {
    day: "Sun",
    weather: "sun",
    temp: "31"
  }
];

const WeekDay = ({ day, weather, temp }) => (
  <DayWeekContainer>
    <Day>{day}</Day>
    <IconWeek>
      <i className={`fas fa-${weather}`} />
    </IconWeek>
    <Temp>{`${temp}°`}</Temp>
    <Line />
  </DayWeekContainer>
);

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const weatherIcons = {
  "500": "cloud-rain",
  "800": "sun",
  "801": "cloud-sun",
  "802": "cloud"
};

export class WeatherBlueContainer extends Component {
  state = { place: "--", time: "--", temperatureToday: "--", forecast: [] };
  loadData() {
    return fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Minsk&APPID=6765cb0ebbef7d8f8f00642dc44487bf&units=metric"
    )
      .then(this.getJson)
      .then(this.processData);
  }
  getJson(response) {
    return response.json();
  }
  processData(data) {
    console.log(data);
    const iconCode = data.weather[0].id;
    const today = new Date(data.dt * 1000);
    const time = today
      .toGMTString()
      .replace(",", "")
      .split(" ")[4]
      .split(":")
      .slice(0, 2)
      .join(":");

    const weekday = days[today.getDay()];
    const dayNumber = today.getDate();
    return {
      place: data.name,
      temperatureToday: data.main.temp,
      weather: data.weather[0].description,
      today: `${weekday}, ${dayNumber}`,
      time
    };
  }

  loadForecast() {
    return fetch(
      "https://api.openweathermap.org/data/2.5/forecast?q=Minsk&APPID=6765cb0ebbef7d8f8f00642dc44487bf&units=metric"
    )
      .then(this.getJson)
      .then(this.processForecast);
  }

  processForecast(data) {
    console.log("forecast", data);
    const list = data.list;
    const found = [];
    const forecast = [];
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
      const date = item.dt_txt.split(" ")[0];
      if (found.indexOf(date) < 0) {
        found.push(date);
        forecast.push(item);
      }
    }
    console.log(forecast);

    return forecast.slice(1).map(data => {
      const weekDay = new Date(data.dt * 1000).getDay();
      console.log(data.weather[0].id);
      const day = days[weekDay].slice(0, 3);
      const weather = weatherIcons[data.weather[0].id];
      return {
        temp: Math.floor(data.main.temp),
        day,
        weather
      };
    });
  }

  async componentDidMount() {
    console.log("mounted");
    const data = await this.loadData();
    const forecast = await this.loadForecast();
    console.log(forecast);
    this.setState({ ...data, forecast });
  }

  render() {
    return <WeatherBlue label="Today's Forecast" {...this.state} />;
  }
}

export const WeatherBlue = props => {
  const {
    label,
    place,
    time,
    temperatureToday,
    weather,
    today,
    forecast
  } = props;
  console.log(forecast);
  return (
    <Container>
      <TopBlock>
        <Label>{label}</Label>
        <RightBlock>
          <Place>{place}</Place>
          <Time>{time}</Time>
        </RightBlock>
      </TopBlock>
      <IconContainer>
        <img src={cloud} />
      </IconContainer>
      <IconWeather>
        <Icon>
          <i className="fas fa-sun" />
        </Icon>
        <TextWeather>{weather}</TextWeather>
      </IconWeather>
      <FooterContainer>
        <TodayContainer>
          <Today>
            <Temperature>{`${temperatureToday}°`}</Temperature>
            <Day>{today}</Day>
          </Today>
          <Line />
        </TodayContainer>
        <Line />
        <WeekContainer>
          {forecast.map(weekDay => {
            return <WeekDay {...weekDay} />;
          })}
        </WeekContainer>
      </FooterContainer>
    </Container>
  );
};
