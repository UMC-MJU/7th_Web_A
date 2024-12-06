import React from 'react';
import { Item } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { remove, complete } from '../redux/todoSlice';
import styled from 'styled-components';

const TodoList = () => {
  const todoList = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const clickDelete = (id) => {
    dispatch(remove(id))
  }

  return (    
    <ItemContainer>
      {todoList.map((todo, idx) => (
        <Item key={todoList[idx].id} text={todo.text} fun={() => clickDelete(todoList[idx].id)}/>
      ))}
    </ItemContainer>
  );
};

export default TodoList;

const ItemContainer = styled.div`
  font-size: 20px;
`