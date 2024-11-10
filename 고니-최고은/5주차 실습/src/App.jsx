import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import { TodoProvider } from './TodoContext.jsx';
import { useContext } from 'react';
import { TodoContext } from './TodoContext.jsx';

function TodoList() {
  const { todos, text, setText, editingId, setEditingId, editText, setEditText, addTodo, deleteTodo, updateTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="todo-input"
        />
        <Button onClick={addTodo} type='submit' className="add-button">
          할 일 등록
        </Button>
      </form>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            {editingId !== todo.id ? (
              <>
                <p>{todo.id}번</p>
                <p>{todo.task}</p>
                <Button onClick={() => deleteTodo(todo.id)} className="delete-button">
                  삭제하기
                </Button>
                <Button onClick={() => setEditingId(todo.id)} className="edit-button">
                  수정 진행
                </Button>
              </>
            ) : (
              <>
                <p>{todo.id}번</p>
                <Input
                  defaultValue={todo.task}
                  onChange={(e) => setEditText(e.target.value)}
                  className="edit-input"
                />
                <div style={{ marginTop: '10px' }}>
                  <Button onClick={() => deleteTodo(todo.id)} className="delete-button">
                    삭제하기
                  </Button>
                  <Button onClick={() => updateTodo(editingId, editText)} className="update-button">
                    수정 완료
                  </Button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

function App() {
  return (
    <TodoProvider>
      <nav>
        <Button onClick={() => {}}>투두 리스트</Button>
      </nav>
      <TodoList />
    </TodoProvider>
  );
}

export default App;