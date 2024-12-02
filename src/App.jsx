import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
      setInputValue("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="container">
      <h1>Todo List</h1>

      <form onSubmit={handleSubmit} className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Yangi vazifa qo'shish"
          className="todo-input"
        />
        <button type="submit" className="add-button">
          Qo'shish
        </button>
      </form>

      <div className="todos-container">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            <span
              onClick={() => toggleTodo(todo.id)}
              className={`todo-text ${todo.completed ? "completed" : ""}`}
            >
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="delete-button"
            >
              O'chirish
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
