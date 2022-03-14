import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import { TodoForm } from "../TodoForm/TodoForm";
import "./Todo.css";

function Todo () {
    const [todos, setTodos] = useContext(TodoContext);
    console.log(todos);


    const handleCheck = () => {
        alert('Task completed!')
    }

    const handleEditList = (e) => {
        e.preventDefault();
        return(
            <TodoForm />
        )
    }

    const handleDeleteList = (e) => {
        e.preventDefault();
    }
    return (
        <div className="List">
            <ul>
                {
                todos.map ((todo, index) => {
                    return (
                        <div className="do">
                        <div className="mark">
                            <div className="check">
                                <input type="checkbox" onClick={handleCheck}></input>
                            </div>
                        <div key = {index} className="todo">
                        <li >
                            {todo.name}
                            <br></br>
                            {todo.description}
                            <br></br>
                            {todo.duedate}
                        </li>
                        </div>
                        </div>
                        <div className="btn">
                            <button className="btnEdit" onClick={handleEditList}>Edit</button>
                            <button className="btnDelete" onClick={handleDeleteList}>Delete</button>
                        </div>
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}

export default Todo;