import { createContext } from "react";
import { useState } from "react";

// 데이터를 담고 있다고 생각.
export const TodoContext = createContext();

// 우산을 만듬. props에 전역에서 접근 가능하도록 설정함.
export function TodoContextProvider({children}) {
  const [todos, setTodos] = useState([
    { id: 1, task: '투두 만들어보기' }
  ]);

  const [text, setText] = useState('');
  const [editingId, setIsEditingId] = useState('');
  const [editText, setEditText] = useState('');
  console.log(editText);

  // 렌더링 방지
  // input 버튼을 클릭하면, 새로고침을 하는 렌더링이 일어나는데 이를 방지하기 위해 아래와 같이 작성하면됨
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  // 1. 추가하기
  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ])
    setText('');
  };

  // 2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  // 3. 수정하기
  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => item.id === id ? { ...item, task: text } : item)
    )
    setIsEditingId('');
  };

  return <TodoContext.Provider value={{
    todos, setTodos, text, setText, editingId, setIsEditingId, editText, setEditText,
    handleSubmit, addTodo, deleteTodo, updateTodo
  }}>{children}</TodoContext.Provider>
}