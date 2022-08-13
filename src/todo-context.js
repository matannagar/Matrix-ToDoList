import React, { useState, useEffect, createContext } from 'react';

export const TodosContext = createContext({});

export const TodosProvider = props => {
    const initialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [todos, setTodos] = useState(initialState);

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
