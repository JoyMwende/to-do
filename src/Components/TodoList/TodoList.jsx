import React, { useState } from "react";
import { Todos } from "../Dos/Dos";
import Todo from "../Todo/Todo";
import './TodoList.css';


function TodoList () {
    const [todos, setTodos] = useState(Todos);
    console.log(todos);
    return(
        <div className="content">
            {/* <h1>My To-do List</h1> */}
            {
                todos.length > 1 ?
                <Todo todos={todos}/>                 
                : 
                <p>You have 0 items to do</p>
            } 
            
        </div>
    );
}

export default TodoList;