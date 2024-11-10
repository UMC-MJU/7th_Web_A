import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, task: 'Todo-list 만들기' },
    { id: 2, task: 'UMC 스터디' },
  ]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  const addTodo = () => {
    if (text.trim().length === 0) {
      alert('입력하세요');
      return;
    }
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text }
    ]);
    setText('');
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
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