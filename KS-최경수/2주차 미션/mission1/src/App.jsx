import { useState } from 'react'
import './App.css'
import calenderIcon from './images/calendar_month.png'
import Header from './components/Header';
import Input from './components/Input';
import Items from './components/Items';
import Button from './components/Button';




function App() {
  // Data
  const [todos, setTodos] = useState([
    {id: 1, task: '투두 만들어보기'}
  ]);

  // Header
  const date = new Date();
  const dateFormatted = `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`;

  // Component UseState
  const [text, setText] = useState('');


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
    console.log("수정버튼 클릭"); 
  };
  return (
    <>
      <Header img={calenderIcon} todayDate={dateFormatted}/>
      <Input textEntered={text} fun={setText} addfun={addTodo}/>
      {todos.map((todo, _) => (
        <div key={todo.id} className="todoitem">
            <Items data={todo} id={todo.id.toString()} deletefun={deleteTodo} updatefun={updateTodo}/>
        </div>
      ))}
    </>
  )
}

export default App
