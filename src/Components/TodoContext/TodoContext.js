import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = (props) => {
    const [todos, setTodos] = useState (
        [
            {
                name: "To-do List",
                description: "This is a project listing my schedule",
                duedate: "Today",
                id: 1
    
            },
            {
                name: "Portifolio",
                description: "This is website that entails all details about me and my professionalism",
                duedate: "End Week",
                id: 2
    
            },
            {
                name: "Website",
                description: "This is website that I am building to put my skills to work",
                duedate: "End Week",
                id: 3
    
            }
    
        ]
    )
return <TodoContext.Provider value = {[todos, setTodos]}>
    {props.children}
</TodoContext.Provider>

}