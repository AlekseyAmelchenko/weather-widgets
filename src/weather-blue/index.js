import React from "react";
import {
  Container,
  TopBlock,
  City,
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
  <>
    <DayWeekContainer>
      <Day>{day}</Day>
      <IconWeek>
        <i className={`fas fa-${weather}`} />
      </IconWeek>
      <Temp>{`${temp}°`}</Temp>
    </DayWeekContainer>
    <Line />
  </>
);

export const WeatherBlueContainer = props => {
  return (
    <>
      <WeatherBlue
        city="Today's Forecast"
        place="Boston"
        time="9:41"
        temperatureToday="33"
        weather="Clear"
        today="Monday 17"
      />
    </>
  );
};

export const WeatherBlue = props => {
  const { city, place, time, temperatureToday, weather, today } = props;
  return (
    <Container>
      <TopBlock>
        <City>{city}</City>
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
        </TodayContainer>
        <Line />
        <WeekContainer>
          {week.map(weekDay => {
            return <WeekDay {...weekDay} />;
          })}
        </WeekContainer>
      </FooterContainer>
    </Container>
  );
};
