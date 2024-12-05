import React from 'react';
import { styled } from "styled-components"
import { FaBoltLightning } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();

  return (
      <Title onClick={() => {navigate('/')}}>
        <FaBoltLightning style={{color: "orange"}}/>  UMC ToDoList   <FaBoltLightning style={{color: "orange"}}/>
      </Title>
  );
};

export default Header;

const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`