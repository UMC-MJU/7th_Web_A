import React from 'react';
import { styled } from "styled-components"

const Item = ({data}) => {
  return (
    <ItemContainer>
      <input
        type='checkBox'
        defaultChecked={data.checked}
      />
      <TextContainer>
        <p>{data.title}</p>
        <p>{data.content}</p>
      </TextContainer>
      <ButtonContainer>
        <Button>수정</Button>
        <Button>삭제</Button>
      </ButtonContainer>
    </ItemContainer>
  );
};

export default Item;

const ItemContainer = styled.div`
  width: 510px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid var(--w8-itemborder);
  margin-top: 15px;
`

const Button = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 10px;
  font-size: 15px;
`

const TextContainer = styled.div`
  width: 100%;
  margin-left: 10px;
`

const ButtonContainer = styled.div`
  width: 100%;
  margin-right: 10px;
  display: flex;
  justify-content: end;
  gap: 10px;
`