import React, { useEffect, useState } from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './Nav.css';
import { TodoForm } from '../TodoForm/TodoForm';

const Nav = () => {

    // useEffect(( => {
    //     fetchTodoForm();
    // }, []))

    const [todos, setTodos] = useState(TodoContext);

    // const fetchTodoForm =
    return (
        <div className='Nav'>
            <h1>My To Do List</h1>
            <button onClick={TodoForm}>
                Add List
            </button>
        </div>
    )
}

export default Nav;