import React from 'react';
import { useState } from 'react';
import './TodoForm.css';

export const TodoForm = () => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [duedate, setDuedate] = useState("")


    const handleUpdate = (e) => {
        e.preventDefault();
        setName("")
        setDescription("")
        setDuedate("")

    }
    return (
        <div className='TodoForm'>
            <form>
                    <h2>Add To do List</h2>
                    <label>Name</label>
                    <input type="text" placeholder='Enter Your List' value={name} onChange={(e) => setName(e.target.value)}/>
                    <label>Description</label>
                    <input type="text" placeholder='Enter description' value={description} onChange={(e) => setDescription(e.target.value)} />
                    <label>Due Date</label>
                    <input type="text" placeholder='Enter due date' value={duedate} onChange={(e) => setDuedate(e.target.value)} />
                    <button onClick={handleUpdate}>Update</button>
            </form>
        </div>
    );
}

// export default TodoForm;
