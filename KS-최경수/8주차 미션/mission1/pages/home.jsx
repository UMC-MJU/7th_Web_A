import React from 'react';
import { useEffect, useState } from 'react'
import { Input, Itemlist } from "../components/Exporter"
import { styled } from "styled-components"
import useCustomFetch from '../hooks/useCustomFetch';
import useCustomPost from '../hooks/useCustomPost';
import useCustomPatch from '../hooks/useCustomPatch';
import useCustomDelete from '../hooks/useCustomDelete';

const Home = () => {
  // TODO 상태값 관리
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState("");

  // 데이터 가져오기
  const { data: todos, isLoading, isError, fetchData } = useCustomFetch();
  const { data: result, postData } = useCustomPost();
  const { data: result2, patchData } = useCustomPatch();
  const { data: result3, deleteData } = useCustomDelete();
  
  useEffect(() => {
    fetchData();
  }, [result, result2, result3]);

  const [debounce, setDebounce] = useState(search);
  useEffect(() => {
    const delaydebounceTimer = setTimeout(() => {
      setDebounce(search)
    }, 1000);

    return () => clearTimeout(delaydebounceTimer);
  }, [search])

  console.log(debounce);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (title !== "" && content !== "") {
      setTitle("");
      setContent("");
      postData({ title, content })
    } else {
      alert("제목 혹은 내용을 입력해주세요!")
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  }

  const updateTodo = (pid, ptitle, pcontent) => {
    patchData({ id: pid, title: ptitle, content: pcontent })
    setEditingId('')
  }
  return (
    <>
      <InputContainer>
        <Input placeholderText={"제목을 입력해주세요"} text={title} fun={setTitle} handler={handleSubmit} />
        <Input placeholderText={"내용을 입력해주세요"} text={content} fun={setContent} handler={handleSubmit} />
        <Button type='submit' onClick={handleSubmit}>ToDo생성</Button>
        <Input placeholderText={"검색할 내용을 입력해보세요"} text={search} fun={setSearch} handler={handleSearch} margin="40px"/>
      </InputContainer>
      
      <Itemlist
        todos={todos}
        editingId={editingId}
        setEditingId={setEditingId}
        patchData={patchData}
        updateTodo={updateTodo}
        deleteData={deleteData}
        isLoading={isLoading}
        isError={isError}
      />

    </>
  );
};

export default Home;

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