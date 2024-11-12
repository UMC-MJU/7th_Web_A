import React, { useState } from 'react';
import styles from '../styles/Item.module.css';
import { FuncContext } from '../routes/Home';
import { useContext } from 'react';
function Item({name,id}) {
    const [isEditing, setIsEditing] = useState(false); // 수정 모드 상태
    const [newName, setNewName] = useState(name); // 수정할 이름
    const { deleteTodo, updateTodo } = useContext(FuncContext);
    // 수정 버튼 클릭 핸들러
    const toggleEdit = () => {
        if (isEditing) {
            updateTodo(id, newName); 
        }
        setIsEditing((prev) => !prev); 
    };

    return (
        <div className={styles.item}>
            {isEditing ? (
                <input 
                    type="text" 
                    value={newName} 
                    onChange={(e) => setNewName(e.target.value)} 
                />
            ) : (
                <h1>{name}</h1>
            )}
            <div className={styles.buttonContainer}>
                <button onClick={() => deleteTodo(id)}>삭제</button>
                <button onClick={toggleEdit}>
                    {isEditing ? '수정 완료' : '수정하기'} 
                </button>
            </div>
        </div>
    );
}

export default Item;
