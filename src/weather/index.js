import React from "react";
import {
  Container,
  Temperature,
  Celsius,
  Line,
  Location,
  City,
  ListContainer,
  ListItem,
  Temp,
  CityName,
  Icon
} from "./styles";

export const Weather = props => {
  const { celsius = 30 } = props;
  return (
    <Container>
      <Temperature>
        <Celsius>{`${celsius}°`}</Celsius>
        <Line />
        <Location>
          <Icon icon="cloud-sun" />
          <City>Kerala</City>
        </Location>
      </Temperature>
      <ListContainer>
        <LocationWeather index={1} icon="sun" location="Texas" temp="32" />
        <LocationWeather
          index={2}
          icon="cloud-rain"
          location="Melbourne"
          temp="28"
        />
        <LocationWeather
          index={3}
          icon="cloud-moon-rain"
          location="Sydney"
          temp="21"
        />
        <LocationWeather
          index={4}
          icon="cloud-sun-rain"
          location="Barcelona"
          temp="31"
        />
        <LocationWeather
          index={5}
          icon="cloud-sun"
          location="Texas"
          temp="32"
        />
      </ListContainer>
    </Container>
  );
};

export const LocationWeather = props => {
  const { bgColor, icon, temp, location, index } = props;
  return (
    <ListItem index={index} bgColor={bgColor}>
      <Icon size={30} marginRight={"10px"} icon={icon} />
      <Temp>{`${temp}°`}</Temp>
      <CityName>{location}</CityName>
    </ListItem>
  );
};
