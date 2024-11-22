import styles from '../styles/Todo.module.css';
import Input from './Input';
import Item from './Item';
import { FuncContext } from '../routes/Home';
import { useContext } from 'react';

function Todo() {
    const { todos } = useContext(FuncContext);
    return (
        <div className={styles.todoList}>
            <Input/>
            {todos.map((item, i) => (
                <Item key={i} id={i} name={item} />
            ))}
        </div>
    );
}

export default Todo;
