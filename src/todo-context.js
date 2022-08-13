import React, { useState, createContext } from 'react';

export const TodosContext = createContext({});

export const TodosProvider = props => {
    const [todos, setTodos] = React.useState([
        {
            id: 0,
            label: "Fix an ability to display all tasks",
            checked: false,
        },
        {
            id: 1,
            label: "Fix a layout, checkboxes should be listed in a column",
            checked: false,
        },
        {
            id: 2,
            label: "Fix an ability to add a new task",
            checked: false,
        },
        {
            id: 3,
            label: "Fix an ability to toggle a task",
            checked: false,
        },
        {
            id: 4,
            label: "Fix an ability to delete a task",
            checked: false,
        },
        {
            id: 5,
            label: "Fix an ability to count completed tasks",
            checked: false,
        },
    ]);

    return (
        <TodosContext.Provider value={[todos, setTodos]}>
            {props.children}
        </TodosContext.Provider>
    )
}
