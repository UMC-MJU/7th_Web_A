import { useState } from 'react'
import './App.css'

import { Header, InputTodo } from "./components";
import TodoList from './pages/todoList';


function App() {
  // Data
  const [todos, setTodos] = useState([
    { id: 1, task: "first" }, { id: 2, task: "second" }, { id: 3, task: "third" }
  ]);

  return (
    <>
      <Header/>
      <InputTodo />
      <TodoList />
    </>
  )
}

export default App
