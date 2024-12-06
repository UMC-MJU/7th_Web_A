import React from 'react';
import styled from 'styled-components';

const InputTodo = ({ textEntered, fun, addfun }) => {
  // 렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={textEntered}
        placeholder="할일을 작성해보세요. 엔터를 누르면 자동으로 추가 됩니다."
        onChange={(e) => fun(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter" && textEntered !== "") addfun();
        }}
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