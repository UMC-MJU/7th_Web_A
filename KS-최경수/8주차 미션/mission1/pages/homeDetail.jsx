import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useCustomFetch from '../hooks/useCustomFetch';
import useCustomPost from '../hooks/useCustomPost';
import useCustomPatch from '../hooks/useCustomPatch';
import useCustomDelete from '../hooks/useCustomDelete';

const HomeDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { data: todo, fetchData} = useCustomFetch();
  const { data: result, postData } = useCustomPost();
  const { data: result2, patchData } = useCustomPatch();
  const { data: result3, deleteData } = useCustomDelete();


  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [checked, setChecked] = useState();

  useEffect(() => {
    fetchData(location.state.id)
  },[result,result2,result3])


  const handleSubmit = () => {
    if(title === undefined && content === undefined && checked === todo.checked) alert("수정한 내용이 없습니다.");
    else {
      patchData({id: todo.id, title: title, content: content, checked: checked })
      alert("수정이 완료됬습니다!");
    }
  }

  const handleDelete = () => {
    deleteData({id: todo.id})
    alert("삭제되었습니다!");
    navigate("/");
  }

  return (
    <Container>
      <CheckBoxContainer>
        <CheckBoxText>완료여부</CheckBoxText>
        <CheckBox defaultChecked={todo.checked} type='checkBox' checked={checked} onClick={(e) => { setChecked(e.target.checked)}}/>
      </CheckBoxContainer>
      <Input defaultValue={todo.title} height="40px" onChange={(e) => setTitle(e.target.value)}/>
      <Input defaultValue={todo.content} height="400px" margintop="20px" onChange={(e) => setContent(e.target.value)}/>
      <Button onClick={handleSubmit}>수정하기</Button>
      <Button onClick={handleDelete}>삭제</Button>
    </Container>
  );
};

export default HomeDetail;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const CheckBoxContainer = styled.div`
  display: flex;
  width: 500px;
  align-items: center;
`
const CheckBoxText = styled.p`
  margin-right: 10px;
  font-size: 15px;
  font-weight: 600;
`
const CheckBox = styled.input`
  width: 20px;
  height: 20px;
`

const Input = styled.textarea`
  width: 500px;
  height: ${(props) => props.height};
  margin-top: ${(props) => props.margintop};
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid black;
`

const Button = styled.button`
  width: 505px;
  height: 50px;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
`