import { useState } from 'react'
import './App.css'
import calenderIcon from './images/calendar_month.png'
import Header from './components/Header';
import Input from './components/Input';
import Items from './components/Items';


function App() {
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
    console.log(editingId);
    console.log(editText);
    setTodos((prev) => prev.map((item) => item.id === editingId ? {...item, task:editText} : item))
    setIsEditingId('');
  };


  return (    
    <>
      <Header img={calenderIcon} todayDate={dateFormatted}/>
      <Input textEntered={text} fun={setText} addfun={addTodo}/>
      {todos.map((todo, _) => (
        <div key={todo.id} className="todoitem">
          {/* 수정 일때 */}
          {editingId === todo.id && (
            <Items data={todo} id={todo.id.toString()} deletefun={deleteTodo} updatefun={updateTodo} text={"완료"} setTextfun={setEditText}/>
          )}
          {/* 수정 아닐때 */}
          {editingId !== todo.id && (
            <Items data={todo} id={todo.id.toString()} deletefun={deleteTodo} updatefun={setIsEditingId} text={"수정"} />
          )}
        </div>
      ))}
    </>
  )
}

export default App
