import React from 'react';
import styled from 'styled-components';

const Item = () => {
  return (
    <ItemContainer>
      <LeftWrapper>
        <CheckBox type="checkbox" />
        <Label>테스트kokokokokpokpokkokpokpo</Label>
      </LeftWrapper>
      <RightWrapper>
        <DeleteButton>삭제</DeleteButton>
      </RightWrapper>
    </ItemContainer>
  );
};

export default Item;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
`

const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5px;
  
`

const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`

const CheckBox = styled.input`
  width: 18px;
  height: 18px;
`
const Label = styled.label`
  width: 650px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  padding-left: 16px;
`
const DeleteButton = styled.button`
  color: var(--w2-delete);
`