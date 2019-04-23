import React from "react";
import { ThemeProvider } from "styled-components";
import {
  Container,
  StatusBar,
  Time,
  IconContainer,
  City,
  Date,
  WeatherIconContainer,
  Temperature,
  TemperatureContainer,
  ExtraContainer,
  Extra,
  ItemContainer,
  ValueContainer,
  WeekContainer,
  Day,
  Temp,
  Week,
  Line,
  Content,
  Location,
  Box
} from "./styles";
import cloud from "../svg/Cloud.svg";
import night from "../svg/Night.svg";
import sun from "../svg/sun.svg";
import moon from "../svg/moon.svg";

const extra = [
  {
    itemContainer: "79%",
    valueContainer: "Humidity"
  },
  {
    itemContainer: "9km/h",
    valueContainer: "Wind"
  },
  {
    itemContainer: "32°",
    valueContainer: "Maximum"
  }
];

const week = [
  {
    weekDay: "Wed",
    weather: "cloud-sun",
    temperature: "27"
  },
  {
    weekDay: "Thurs",
    weather: "cloud",
    temperature: "26"
  },
  {
    weekDay: "Sat",
    weather: "cloud-rain",
    temperature: "29"
  },
  {
    weekDay: "Sun",
    weather: "smog",
    temperature: "25"
  },
  {
    weekDay: "Mon",
    weather: "sun",
    temperature: "30"
  }
];

const ExtraWeather = ({ itemContainer, valueContainer }) => (
  <Extra>
    <ItemContainer>{itemContainer}</ItemContainer>
    <ValueContainer>{valueContainer}</ValueContainer>
  </Extra>
);

const WeekDay = ({ weekDay, weather, temperature }) => (
  <Week>
    <Day>{weekDay}</Day>
    <i className={`fas fa-${weather}`} />
    <Temp>{`${temperature}°`}</Temp>
  </Week>
);

export const WeatherAppConcept = props => {
  return (
    <Box>
      <WeatherApp
        weatherIcon={cloud}
        time="9:41"
        date="Tuesday 15 April 2019"
      />
      <WeatherApp
        date="Tuesday 16 April 2019"
        time="0:12"
        weatherIcon={moon}
        theme={{
          bgColor: "linear-gradient(#3c2c41, #292235)",
          barColor: "white",
          date: "white",
          temperature: "white",
          itemContainer: "white",
          day: "white",
          temp: "white",
          icon: "white"
        }}
      />
    </Box>
  );
};

export const WeatherApp = props => {
  const {
    weatherIcon,
    time,
    date,
    theme = {
      bgColor: "linear-gradient(#f5f5f5, #f4f2f4)",
      barColor: "black",
      date: "#949494",
      temperature: "black",
      itemContainer: "black",
      day: "black",
      temp: "black",
      icon: "black"
    }
  } = props;
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar>
          <Time>{time}</Time>
          <IconContainer>
            <i className="fas fa-signal" />
            <i className="fas fa-wifi" />
            <i className="fas fa-battery-three-quarters" />
          </IconContainer>
        </StatusBar>
        <Content>
          <Location>
            <City>Sydney</City>
            <Date>{date}</Date>
          </Location>
          <WeatherIconContainer>
            <img src={weatherIcon} />
            <TemperatureContainer>
              <Temperature>26°</Temperature>
              <p>Partly cloudy</p>
            </TemperatureContainer>
          </WeatherIconContainer>
          <ExtraContainer>
            {extra.map(extraWeather => {
              return <ExtraWeather {...extraWeather} />;
            })}
          </ExtraContainer>
          <WeekContainer>
            {week.map(weekDay => {
              return <WeekDay {...weekDay} />;
            })}
          </WeekContainer>
          <Line />
        </Content>
      </Container>
    </ThemeProvider>
  );
};
