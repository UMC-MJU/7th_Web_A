import { useState } from 'react';
import styles from '../Input.module.css'

function Input({addTodo}){
  const [inputValue, setInputValue] = useState('')

  const onEnter = (e)=>{
    if(e.key === "Enter"&& inputValue.trim() !== '') {
      addTodo(inputValue);
      setInputValue('')
    }
  }
  return (
    <input
      className={styles.input}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)} 
      onKeyDown={onEnter}
      placeholder='할 일을 입력하세요'
    />
  );
}


export default Input;