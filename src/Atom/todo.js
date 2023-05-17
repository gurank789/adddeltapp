import React, { useState } from 'react';
import styles from './Todo.module.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const handleTodoToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleTodoDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
   
    <div   className={styles['todo-list']}>
      <h1> Add and Delete app </h1>
      <form onSubmit={handleNewTodoSubmit}>
        <input
          type="text"
          placeholder="New Todo"
          value={newTodo}
          onChange={handleNewTodoChange}
        />
        <button type="submit">Add Todo</button>
      </form>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className={styles.todo}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleTodoToggle(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => handleTodoDelete(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;