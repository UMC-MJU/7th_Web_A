import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from './useFetch'; // 필요시 useFetch 추가

const TodoDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await fetch(`http://localhost:3000/todo/${id}`);
      const data = await response.json();
      setTodo(data);
      setTitle(data.title);
      setContent(data.content);
    };

    fetchTodo();
  }, [id]);

  const handleUpdate = async () => {
    const updatedTodo = { title, content };
    await fetch(`http://localhost:3000/todo/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTodo),
    });
    navigate('/'); // 수정 후 리스트 페이지로 돌아가기
  };

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/todo/${id}`, {
      method: 'DELETE',
    });
    navigate('/'); // 삭제 후 리스트 페이지로 돌아가기
  };

  if (!todo) return <p>로딩 중...</p>;

  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.content}</p>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleUpdate}>수정</button>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default TodoDetail;