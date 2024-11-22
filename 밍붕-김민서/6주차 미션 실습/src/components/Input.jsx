import { useState } from 'react';
import styles from '../styles/Input.module.css';
import { FuncContext } from '../routes/Home';
import { useContext } from 'react';
function Input() {
  const [inputValue, setInputValue] = useState('');
  const [isComposing, setIsComposing] = useState(false); // isComposing 상태 추가
  const { addTodo } = useContext(FuncContext);

  const onEnter = (e) => {
    if (e.key === 'Enter' && inputValue.trim() !== '' && !isComposing) { // isComposing 체크
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <input
      className={styles.input}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={onEnter}
      onCompositionStart={() => setIsComposing(true)} // IME 입력 시작
      onCompositionEnd={() => setIsComposing(false)} // IME 입력 끝
      placeholder='할 일을 입력하세요'
    />
  );
}

export default Input;
