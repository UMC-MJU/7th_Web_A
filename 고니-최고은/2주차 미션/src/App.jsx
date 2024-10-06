import './App.css'
import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import MovieList from './MovieList';

function App() {
  const [currentPage, setCurrentPage] = useState('todos');

  // 투두리스트, 화면에 출력되는 (추가, 삭제, 수정)
  const [todos, setTodos] = useState([
    {id: 1, task: 'Todo-list 만들기'},
    {id: 2, task: 'UMC 스터디'},
  ]);

  const [text, setText] = useState('');

  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  // 렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // 1. 추가하기
  const addTodo = () => {
    if (text.trim().length === 0) {
      alert('입력하세요');
      return;
    }
    setTodos((prev) => [
      ...prev,
      {id: Math.floor(Math.random() * 100) + 2, task: text}
    ]);
    setText('');
  };

  // 2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }

  // 3. 수정하기
  const updateTodo = (id, text) => {
    setTodos((prev) => 
      prev.map((item) => (item.id === id ? {...item, task: text} : item))
    );
    setEditingId('');
  };

  return (
    <>
      <nav>
        <Button onClick={() => setCurrentPage('todos')}>투두 리스트</Button>
        <Button onClick={() => setCurrentPage('movies')}>영화 목록</Button>
      </nav>

      {currentPage === 'todos' ? (
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
      ) : (
        <MovieList /> // 영화 목록 컴포넌트를 렌더링
      )}
    </>
  );
}

export default App;


