import React from 'react';
import './App.css';

import Title from './Title';
import Input from './Input';

function App() {
  return (
    <div className="App">
      <Title />
      <Input />
      <div>
        <p>Todo 1</p>
        <p>Todo 2</p>
        <p>Todo 3</p>
        <p>Todo 4</p>
      </div>
    </div>
  );
}

export default App;
