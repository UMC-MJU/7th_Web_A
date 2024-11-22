import React, { useState } from 'react';
import { styled } from "styled-components"


const Item = ({ data, editingId, setEditingId, patchData, updateTodo, deleteData }) => {
  const [title, setTitle] = useState(data.title);
  const [content, setContent] = useState(data.content);


  return (
    <ItemContainer onClick={() => {console.log(data.id)}}>
      <input
        type='checkBox'
        defaultChecked={data.checked}
        onChange={(e) => {
          patchData({id: data.id, checked: !data.checked} )
        }}
      />
      <TextContainer>
        {data.id !== editingId ? 
        (
        /* 수정이 아닐때 */
          <>
            <p>{title}</p>
            <p>{content}</p>
          </>
        ) : 
        /* 수정이 일때 */
        (
          <>
          <Input defaultValue={title} onChange={(e) => {setTitle(e.target.value)}}/>
          <Input defaultValue={content} onChange={(e) => {setContent(e.target.value)}}/>
          </>
        )}

      </TextContainer>
      <ButtonContainer>
        {data.id === editingId ? 
        (<Button onClick={() => {
          if(title != data.title || content != data.content) 
            updateTodo(data.id, title, content)
          else
            setEditingId('')
          }}
          >수정완료</Button>) : 
        (<Button onClick={() => {setEditingId(data.id)}}>수정</Button>)}
        <Button onClick={() => {deleteData({id:data.id})}}>삭제</Button>
      </ButtonContainer>
    </ItemContainer >   
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

const Input = styled.input`
  width: 100%;
  height: 25px;
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
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