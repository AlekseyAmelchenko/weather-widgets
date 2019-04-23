import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #3e98a1;
  user-select: none;
  box-sizing: border-box;
  margin-right: 10px;
`;
export const Temperature = styled.div`
  display: flex;
  height: 70px;
  padding: 20px;
`;
export const Celsius = styled.div`
  display: flex;
  color: #fff;
  font-weight: 700;
  font-size: 54px;
  margin-right: 20px;
`;
export const Line = styled.div`
  display: flex;
  border: 1px solid white;
  margin-right: 20px;
`;
export const Location = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  i {
    color: #fff;
    font-size: 36px;
    margin-bottom: 5px;
  }
`;
export const City = styled.div`
  display: flex;
  color: #fff;
`;
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;
export const ListItem = styled.div`
  display: flex;
  padding: 10px;
  color: #fff;
  align-items: center;
  line-height: 1;
  justify-content: flex-start;
  background-color: ${({ bgColor }) => bgColor};
  background-color: ${({ index }) =>
    `rgba(100,255,255, ${0.6 - index * 0.07})`};
`;
export const Icon = styled.i.attrs(({ icon }) => ({
  className: `fas fa-${icon}`
}))`
  width: ${({ width = "auto" }) => width}
  text-align: center;
  margin-right: ${({ marginRight = 0 }) => marginRight};
  font-size: ${({ size }) => `${size}px`};
`;
export const Temp = styled.div`
  margin-right: 20px;
`;
export const CityName = styled.div`
  display: flex;
`;
