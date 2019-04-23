import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  font-family: sans-serif;
  justify-content: center;
  background-color: #01b0f1;
  flex-direction: column;
  box-shadow: 0px 0px 3px 0px rgba(138, 138, 138, 1);
`;
export const TopBlock = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  padding: 10px;
`;
export const City = styled.div`
  display: flex;
  font-size: 28px;
`;
export const RightBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 20px;
`;
export const Place = styled.div``;
export const Time = styled.div``;
export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  img {
    width: 150px;
    min-height: 100px;
  }
`;
export const IconWeather = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;
export const Icon = styled.div`
  margin-right: 5px;
  color: #fff;
`;
export const TextWeather = styled.div`
  color: #fff;
  text-transform: uppercase;
`;
export const FooterContainer = styled.div`
  display: flex;
  background-color: #fff;
  justify-content: center;
  padding: 10px;
`;
export const TodayContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Today = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;
export const Temperature = styled.div`
  font-size: 48px;
  margin-bottom: 10px;
`;
export const Day = styled.div`
  display: flex;
  font-size: 16px;
  color: #4e4b52;
  margin-bottom: 10px;
`;
export const Line = styled.div`
  display: flex;
  border: 1px solid #deddde;
  margin-right: 15px;
  &:last-of-type {
    display: none;
  }
`;
export const WeekContainer = styled.div`
  display: flex;
`;
export const DayWeekContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 15px;
  &:last-of-type {
    margin-right: 0;
  }
`;
export const Temp = styled.div`
  display: flex;
`;
export const IconWeek = styled.div`
  display: flex;
  margin-bottom: 15px;
  color: #e0e0e2;
`;
