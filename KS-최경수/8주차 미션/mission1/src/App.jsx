import { useEffect, useState } from 'react'
import { Header, Input, Item } from "../components/Exporter"
import { styled } from "styled-components"
import useCustomFetch from '../hooks/useCustomFetch';
import useCustomPost from '../hooks/useCustomPost';

function App() {
  // TODO 상태값 관리
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState("");

  // 데이터 가져오기

  const { data: todos, setData } = useCustomFetch('/todo');
  const { data: result, postData } = useCustomPost('/todo');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== "" && content !== "") {
      setTitle("");
      setContent("");
      postData(title, content)
    } else{
      alert("제목 혹은 내용을 입력해주세요!")
    }
  }


  return (
    <>
      <Header />
      <InputContainer>
        <Input placeholderText={"제목을 입력해주세요"} text={title} fun={setTitle} handler={handleSubmit} />
        <Input placeholderText={"내용을 입력해주세요"} text={content} fun={setContent} handler={handleSubmit} />
        <Button type='submit' onClick={handleSubmit}>ToDo생성</Button>
      </InputContainer>
      <ItemContainer>
        {todos && todos.map((todo) => {
          return (
            <Item data={todo} key={todo.id} />
          )
        })
        }

      </ItemContainer>

    </>
  )
}

export default App

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`

const Button = styled.button`
   width: 515px;
   height: 45px;
   border-radius: 10px;
   border: none;
   font-size: 15px;
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`