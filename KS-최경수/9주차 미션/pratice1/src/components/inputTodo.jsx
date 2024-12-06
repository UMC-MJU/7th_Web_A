import React, {useState} from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { add } from '../redux/todoSlice';

const InputTodo = ({ textEntered, fun, addfun }) => {

  const dispatch = useDispatch();

  const [todolist, setTodolist] = useState(
    {id: 0, text:""}
  )


  // 렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todolist.text !== "") dispatch(add(todolist.text))
    else alert("할일을 입력해주세요!")
    setTodolist({text : ""})
  }

  const handleText = (e) => {
    setTodolist({text : e.target.value});
  }



  return (
    <form onSubmit={handleSubmit}>
      <Input 
        type="text"
        value={todolist.text}
        placeholder="할일을 작성해보세요. 엔터를 누르면 자동으로 추가 됩니다."
        onChange={handleText}
      />
    </form>
  );
};

export default InputTodo;

const Input = styled.input`
  width: 100%;
  height: 60px;
  padding-left: 18px;
  border: 0px;
  border-radius: 10px;
  box-sizing: border-box;
  margin: 29px 0 10px 0;
  background-color: var(--w2-inputBackground);

  &::placeholder{
    color: var(--w2-inputPlaceHolder);
    font-size: 16px;  
  }

  &:focus{
    border: 2px solid var(--w2-inputFocusBorder);
    outline: none;
  }
`