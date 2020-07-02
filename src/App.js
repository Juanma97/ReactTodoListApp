import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Card from '@material-ui/core/Card';
import Toolbar from '@material-ui/core/Toolbar';
import './App.css';

function App() {

  const [todos, setTodos] = useState([]);

  const addItem = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  function deleteTodo (todoToDelete){
    var index = todos.indexOf(todoToDelete);
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>TodoList App</Toolbar>
      </AppBar>
      <div className="todos-container">
        <div className="form">
          <TextField className="textfield" variant="outlined" id="input-todo"></TextField>
          <IconButton className="add-btn" onClick={() => {addItem(document.getElementById("input-todo").value)}}>
            <AddIcon />
          </IconButton>
        </div>
          {todos.map((todo, index) => (
            <div className="container-todo">
              <Card className="todo">
                  <p key={index}>{todo}</p>
              </Card>
              <div className="delete-todo">
                <DeleteIcon onClick={() => deleteTodo(todo)}/>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}

export default App;
