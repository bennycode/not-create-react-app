import './App.css';
import React from 'react';
import TodoList from './components/TodoList';

function App(): JSX.Element {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
