import { useState, useContext } from 'react'
import { TodoContext } from './context/TodoContext';
import './App.css'
import calenderIcon from './images/calendar_month.png'
import Header from './components/Header';
import Input from './components/Input';
import Items from './components/Items';


function App() {
  const {dateFormatted, todos, text, setText, editingId, setIsEditingId, setEditText,
     addTodo, deleteTodo, updateTodo} = useContext(TodoContext);

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
