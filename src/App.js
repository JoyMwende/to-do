
import React from 'react';
import './App.css';
import TodoList from "./Components/TodoList/TodoList";
import Nav from './Components/Nav/Nav';
import { TodoContext, TodoProvider } from './Components/TodoContext/TodoContext';
// import { TodoForm } from './Components/TodoForm/TodoForm';

function App () {
return (
    <TodoProvider>
        <div className="App">
          <Nav />
          <TodoList />
        </div>
  </TodoProvider>
)
 
}

export default App;
