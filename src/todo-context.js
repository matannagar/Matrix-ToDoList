import React, { useState, useEffect, createContext } from 'react';

export const TodosContext = createContext({});

export const TodosProvider = props => {
    const initialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [todos, setTodos] = useState(initialState);
    // {
    //     id: 0,
    //     label: "Fix an ability to display all tasks",
    //     checked: false,
    // },
    // {
    //     id: 1,
    //     label: "Fix a layout, checkboxes should be listed in a column",
    //     checked: false,
    // },
    // {
    //     id: 2,
    //     label: "Fix an ability to add a new task",
    //     checked: false,
    // },
    // {
    //     id: 3,
    //     label: "Fix an ability to toggle a task",
    //     checked: false,
    // },
    // {
    //     id: 4,
    //     label: "Fix an ability to delete a task",
    //     checked: false,
    // },
    // {
    //     id: 5,
    //     label: "Fix an ability to count completed tasks",
    //     checked: false,
    // },
    // ]);

    const [task, setTask] = useState('');
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <TodosContext.Provider value={[todos, setTodos, task, setTask]}>
            {props.children}
        </TodosContext.Provider>
    )
}
