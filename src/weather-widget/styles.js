import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #49dab9;
  position: relative;
  color: #fff;
`;
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const CityContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const City = styled.div`
  font-size: 28px;
  font-weight: 700;
`;
export const Temperature = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  margin-bottom: 30px;
`;
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 120px;
  margin-bottom: 20px;
`;
export const Settings = styled.div`
  display: flex;
  padding: 5px;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  left: 10px;
`;
export const WeekContainer = styled.div`
  background-color: red;
`;
export const DayItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 16px;
  background-color: ${({ index }) => `rgba(0,0,0, ${index * 0.05})`};
`;
export const Day = styled.div`
  display: flex;
  height: 40px;
  padding: 16px;
`;
export const Temp = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ primary }) => (primary ? "32px" : "20px")};
  height: 60px;
  font-weight: bold;
  margin-bottom: 16px;
`;
export const WeekDay = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;
`;
