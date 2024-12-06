import React from 'react';
import { Item } from '../components';
import styled from 'styled-components';

const TodoList = () => {
  return (
    <ItemContainer>
      <Item/>
    </ItemContainer>
  );
};

export default TodoList;

const ItemContainer = styled.div`
  font-size: 20px;
`