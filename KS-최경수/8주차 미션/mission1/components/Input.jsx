import React from 'react';
import { styled } from "styled-components"
const Input = ({ placeholderText, text, fun, handler }) => {

  return (
    <form onSubmit={handler}>
      <InputCommon
        type="text"
        value={text}
        placeholder={placeholderText}
        onChange={(e) => { fun(e.target.value) }}
      />
    </form>
  );
};

export default Input;

const InputCommon = styled.input`
  width: 500px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid gray;
  padding-left: 10px;
`