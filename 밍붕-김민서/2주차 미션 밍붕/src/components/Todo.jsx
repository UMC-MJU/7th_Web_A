import styles from '../Todo.module.css';
import Input from './Input';
import Item from './Item';

function Todo({ addTodo, todos, deleteTodo, updateTodo }) {
    return (
        <div className={styles.todoList}>
            <Input addTodo={addTodo} />
            {todos.map((item, i) => (
                <Item key={i} id={i} name={item} deleteTodo={deleteTodo} updateTodo={updateTodo} />
            ))}
        </div>
    );
}

export default Todo;
