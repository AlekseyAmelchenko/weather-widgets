import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 330px;
  height: 600px;
  flex-direction: column;
  background: ${({ theme }) => theme.bgColor};
  margin-right: 10px;
  &:last-of-type {
    margin: 0;
  }
  @media (max-height: 600px) {
    min-height: 100vh;
    height: auto;
  }
`;
export const StatusBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.barColor};
`;
export const IconContainer = styled.div`
  display: flex;
  font-size: 10px;
  i {
    margin-right: 2px;
  }
`;
export const Time = styled.div`
  display: flex;
  font-size: 12px;
`;
export const City = styled.div`
  display: flex;
  width: 100%;
  font-size: 28px;
  color: ${({ theme }) => theme.barColor};
`;
export const Date = styled.div`
  display: flex;
  width: 100%;
  font-size: 14px;
  color: ${({ theme }) => theme.date};
`;
export const WeatherIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
  img {
    width: 150px;
    min-height: 100px;
  }
`;
export const TemperatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  p {
    margin: 0;
    color: #cf5687;
  }
`;
export const Temperature = styled.div`
  display: flex;
  justify-content: center;
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.temperature};
`;
export const ExtraContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 20px;
`;
export const Extra = styled.div`
  text-align: center;
  margin-right: 30px;
  &:last-of-type {
    margin: 0;
  }
`;
export const ItemContainer = styled.div`
  color: ${({ theme }) => theme.itemContainer};
`;
export const ValueContainer = styled.div`
  color: #949494;
`;
export const WeekContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  margin-bottom: 20px;
`;
export const Day = styled.div`
  margin-bottom: 5px;
  font-size: 14px;
  color: ${({ theme }) => theme.day};
`;
export const Temp = styled.div`
  color: ${({ theme }) => theme.temp};
`;
export const Week = styled.div`
  margin-right: 10px;
  padding: 10px;
  i {
    font-size: 22px;
    color: ${({ theme }) => theme.icon};
    padding: 10px 0;
  }
  &:last-of-type {
    margin: 0;
  }
`;
export const Line = styled.div`
  display: flex;
  justify-content: center;
  border: 3px solid #deddde;
  border-radius: 50px;
  width: 150px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 20px;
  justify-content: flex-start;
  align-items: center;
`;
export const Location = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: row;
`;
