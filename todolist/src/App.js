import React, { useState } from 'react';
import plusIcon from './assets/img/plus.svg';
import deleteIcon from './assets/img/delete.svg';
import './assets/scss/style.scss';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue === '') {
      alert('내용을 입력해주세요');
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div id="wrap">
      <header id="header">
        <h1>TO DO LIST</h1>
        <div className="add">
          <input
            type="text"
            placeholder="오늘 할 일을 입력해주세요."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            id="input_todo"
          />
          <button id="addbtn" onClick={handleAddTodo}>
            <img src={plusIcon} alt="Add" />
          </button>
        </div>
      </header>
      <main id="main">
        {todos.map((todo) => (
          <div key={todo.id} className="list">
            <div className="box">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
                id={`checkbox${todo.id}`}
              />
              <label htmlFor={`checkbox${todo.id}`}></label>
              <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
              </p>
            </div>
            <button id="deletebtn" onClick={() => handleDeleteTodo(todo.id)}>
              <img src={deleteIcon} alt="Delete" />
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
