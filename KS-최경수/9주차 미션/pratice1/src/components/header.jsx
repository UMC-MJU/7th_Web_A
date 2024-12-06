import React from 'react';
import styled from 'styled-components';
import ico_calendar from "../images/calendar_month.png";

const Header = () => {

  const date = new Date();
  const dateFormatted = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;


  return (
    <DateContainer>
      <DateTitle>할일 목록</DateTitle>
      <DateInfo>
        <DateImg src={ico_calendar}></DateImg>
        <DateFormat>{dateFormatted}</DateFormat>
      </DateInfo>
    </DateContainer>
  );
};

export default Header;

const DateContainer = styled.header`
  min-width: 797px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`
const DateTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
`
const DateInfo = styled.div`
  display: flex;
  align-items: center;
`
const DateImg = styled.img`
  width: 24px;
  height: 24px;
`

const DateFormat = styled.p`
  font-size: 20px;
  margin-left: 10px;
  margin-top: 25px;
`