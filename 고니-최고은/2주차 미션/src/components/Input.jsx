import React from 'react';
import './Input.css';

const Input = ({ value, onChange, className }) => {
  return (
    <input 
      type='text' 
      value={value} 
      onChange={onChange} 
      className={`custom-input ${className}`} 
    />
  );
};

export default Input;