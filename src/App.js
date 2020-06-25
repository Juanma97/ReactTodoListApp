import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const state = useState([]);
  const todos = state[0];
  const setTodos = state[1];

  const addItem = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  function editTodo() {
    
  }

  function deleteTodo (todoToDelete){
    var index = todos.indexOf(todoToDelete);
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  useEffect(() => {
    console.log("Cambio de estado");
  })

  return (
    <div className="App">
      <h1>TodoList App</h1>
      <input type="text" id="input-todo"></input>
      <button onClick={() => {addItem(document.getElementById("input-todo").value)}}>Add Todo</button>
      <div className="todos-container">
        {todos.map(todo => (
          <div className="todo">
            <p key="todo">{todo}</p>
            <div className="edit-todo" onClick={() => editTodo()}>Edit</div>
            <div className="delete-todo" onClick={() => deleteTodo(todo)}>Delete</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
