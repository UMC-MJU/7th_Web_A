import { useState } from 'react';
import styles from '../styles/App.module.css';
import Header from '../components/Header';
import Todo from '../components/Todo';

function Home() {
    const [todos, setTodo] = useState([]);

    const addTodo = (todo) => {
        setTodo((prevTodos) => [...prevTodos, todo]);
    };

    const deleteTodo = (id) => {
        console.log(id,todos)
        setTodo((prevTodos) => prevTodos.filter((_, index) => index !== id));
    };

    const updateTodo = (id,text)=>{
        let copy = [...todos];
        copy[id] = text;
        setTodo(copy);
    }
    
    return (
        <>
            <div className={styles.container}>
                <Header />
                <Todo addTodo={addTodo} deleteTodo={deleteTodo} updateTodo={updateTodo} todos={todos} />
            </div>
        </>
    );
}

export default Home;
