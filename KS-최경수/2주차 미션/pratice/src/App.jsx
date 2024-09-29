import { useState } from 'react';
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {id: 1, task : '투두 만들어보기'}
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
    {id: Math.floor(Math.random()*100)+2, task: text},
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
    prev.map((item) => item.id === id ? {...item, task:text} : item)
  )
  setIsEditingId('');
}; 

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
