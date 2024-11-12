import { useState, createContext, useContext } from 'react';
import styles from '../styles/App.module.css';
import Header from '../components/Header';
import Todo from '../components/Todo';

const FuncContext = createContext();

function Home() {
    const [todos, setTodo] = useState([]);

    const addTodo = (todo) => {
        setTodo((prevTodos) => [...prevTodos, todo]);
    };

    const deleteTodo = (id) => {
        setTodo((prevTodos) => prevTodos.filter((_, index) => index !== id));
    };

    const updateTodo = (id, text) => {
        const updatedTodos = [...todos];
        updatedTodos[id] = text;
        setTodo(updatedTodos);
    };

    
    return (
        <FuncContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo }}>
            <div className={styles.container}>
                <Header />
                <Todo />
            </div>
        </FuncContext.Provider>
    );
}

export { FuncContext };
export default Home;
