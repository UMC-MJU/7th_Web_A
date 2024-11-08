import { createContext } from "react";
import { useState } from "react";

// 데이터를 담고 있다고 생각.
export const TodoContext = createContext();

// 우산을 만듬. props에 전역에서 접근 가능하도록 설정함.
export function TodoContextProvider({children}) {
    // Data
    const [todos, setTodos] = useState([
      {id:1, task:"first"},{id:2, task:"second"},{id:3, task:"third"}
    ]);
  
    // Header
    const date = new Date();
    const dateFormatted = `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`;
  
    // Component UseState
    const [text, setText] = useState('');
    const [editingId, setIsEditingId] = useState('');
    const [editText, setEditText] = useState('');
  
    // 1. 추가하기
    const addTodo = () => {
      setTodos((prev) => [
        ...prev,
        {id : Math.floor(Math.random()*100)+2, task: text},
      ])
      setText('');
    };
  
    // 2. 삭제하기
    const deleteTodo = (id) => {
      setTodos((prev) => prev.filter((item) => item.id !== id));
    };   
  
    // 3. 수정하기
    const updateTodo = () => {
      setTodos((prev) => prev.map((item) => item.id === editingId ? {...item, task:editText} : item))
      setIsEditingId('');
    };
  return <TodoContext.Provider value={{
    todos, setTodos, text, setText, editingId, setIsEditingId, setEditText,
     addTodo, deleteTodo, updateTodo
  }}>{children}</TodoContext.Provider>
}