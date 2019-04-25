import React from "react";
import { Container, Background, TopBox, Day, Time, IconBox } from "./styles";

export const WeatherCards = props => {
  return (
    <Container>
      <Background />

      <TopBox>
        <Day>Mon</Day>
        <Time>18:05</Time>
        <IconBox>
          <i className="fas fa-cog" />
        </IconBox>
      </TopBox>
    </Container>
  );
};
