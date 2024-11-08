import './App.css'
import { useContext,useState } from 'react';
import { TodoContext } from './context/TodoContext';

function App() {
  const {todos, text, setText, editingId, setIsEditingId, editText, setEditText,
    handleSubmit, addTodo, deleteTodo, updateTodo} = useContext(TodoContext);

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={text} 
        onChange={(e) => setText(e.target.value)}/>
      <button 
        type = 'submit' 
        onClick={() => addTodo()}>할 일 등록</button>  
    </form>
    <div>
      {todos.map((todo, _) => (
        <>
          <div style={{ display: 'flex', gap: '10px' }}>
            {/* 수정이 아닐때 */}
            {editingId !== todo.id && (
              <div key={todo.id} style={{ display: 'flex', gap: '5px' }}>
              <p>{todo.id}. </p>
              <p>{todo.task}</p>
            </div>
            )}
             {/* 수정 일때 */}
            {editingId === todo.id  && (
              <div key={todo.id} style={{ display: 'flex', gap: '5px' }}>
                <p>{todo.id}. </p>
                <input defaultValue={todo.task} onChange={(e) =>setEditText(e.target.value)}/>
              </div>
            )}
            <button onClick={() => deleteTodo(todo.id)}>삭제하기</button>
            {/* editingId !== todo.id는 수정이 아닐때*/}
            {/* editingId === todo.id는 수정 일때*/}
            {editingId === todo.id ? 
            (<button onClick={() => updateTodo(editingId, editText)}>수정 완료</button>) 
            : (<button onClick={() => setIsEditingId(todo.id)}>수정진행</button>)}
          </div>
        </>
      ))}
      
    </div>
    </>
  )
}

export default App
