import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import { TodoProvider, TodoContext } from './TodoContext.jsx';
import { useEffect, useContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import debounce from 'lodash';
import TodoDetail from './TodoDetail'; // TodoDetail import

const TodoListContainer = styled.div`
  // 스타일 추가
`;

function TodoList() {
  const { todos, setTodos, text, setText, addTodo, deleteTodo } = useContext(TodoContext);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = debounce(async (term) => {
    const response = await fetch(`http://localhost:3000/todo?title=${term}`);
    const data = await response.json();
    setTodos(data);
  }, 300);

  const fetchTodos = async () => {
    const response = await fetch('http://localhost:3000/todo');
    const data = await response.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, [setTodos]);

  useEffect(() => {
    if (searchTerm) {
      handleSearch(searchTerm);
    } else {
      fetchTodos(); // 전체 리스트로 초기화
    }
  }, [searchTerm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    addTodo();
  };

  return (
    <TodoListContainer>
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
      <Input
        placeholder="검색..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <p>{todo.title}</p>
            <Button onClick={() => deleteTodo(todo.id)} className="delete-button">
              삭제하기
            </Button>
            <Button onClick={() => navigate(`/todo/${todo.id}`)} className="edit-button">
              상세 보기
            </Button>
          </div>
        ))}
      </div>
    </TodoListContainer>
  );
}

function App() {
  return (
    <Router>
      <TodoProvider>
        <Routes>
          <Route path="/todo/:id" element={<TodoDetail />} />
          <Route path="/" element={<TodoList />} />
        </Routes>
      </TodoProvider>
    </Router>
  );
}

export default App;