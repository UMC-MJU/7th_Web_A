import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Todo-list 만들기' },
    { id: 2, title: 'UMC 스터디' },
  ]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  const addTodo = () => {
    if (text.trim().length === 0) {
      alert('입력하세요');
      return;
    }
    const newTodo = { id: Date.now(), title: text }; // Date.now()로 고유 ID 생성
    setTodos((prev) => [...prev, newTodo]);
    setText('');
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, title: text } : item))
    );
    setEditingId('');
  };

  return (
    <TodoContext.Provider value={{
      todos,
      text,
      setText,
      editingId,
      setEditingId,
      editText,
      setEditText,
      addTodo,
      deleteTodo,
      updateTodo,
    }}>
      {children}
    </TodoContext.Provider>
  );
};