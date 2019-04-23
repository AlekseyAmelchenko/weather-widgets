import React from "react";
import {
  Container,
  LeftContainer,
  CityContainer,
  City,
  Temperature,
  IconContainer,
  Settings,
  WeekContainer,
  WeekDay,
  DayItem,
  Day,
  Temp
} from "./styles";
import { Icon } from "../weather/styles";

export const SingleColumn = props => {
  const { header, temp, icon, primary, index } = props;
  return (
    <DayItem index={index}>
      <Day>{header}</Day>
      <Temp primary={primary}>{`${temp}°C`}</Temp>
      <IconContainer>
        <Icon icon={icon} size={primary ? 80 : 40} />
      </IconContainer>
    </DayItem>
  );
};

export const WeatherWidget = props => {
  return (
    <Container>
      <SingleColumn
        index={1}
        header={
          <CityContainer>
            <Icon icon="map-marker-alt" size="28" marginRight="10px" />
            <City>New York</City>
          </CityContainer>
        }
        temp="+23"
        icon="sun"
        primary
      />
      <SingleColumn
        index={2}
        header={<WeekDay>MO</WeekDay>}
        temp={"+16"}
        icon={"sun"}
      />
      <SingleColumn
        index={3}
        header={<WeekDay>TU</WeekDay>}
        temp={"+17"}
        icon={"cloud-showers-heavy"}
      />
      <SingleColumn
        index={4}
        header={<WeekDay>WE</WeekDay>}
        temp={"+17"}
        icon={"cloud-rain"}
      />
      <SingleColumn
        index={5}
        header={<WeekDay>TH</WeekDay>}
        temp={"+17"}
        icon={"cloud-sun"}
      />
      <SingleColumn
        index={6}
        header={<WeekDay>FR</WeekDay>}
        temp={"+17"}
        icon={"cloud-sun-rain"}
      />
      <SingleColumn
        index={7}
        header={<WeekDay>Sa</WeekDay>}
        temp={"+17"}
        icon={"cloud"}
      />
      <SingleColumn
        index={8}
        header={<WeekDay>SU</WeekDay>}
        temp={"+17"}
        icon={"smog"}
      />

      <Settings>
        <i className="fas fa-cog" />
      </Settings>
    </Container>
  );
};
