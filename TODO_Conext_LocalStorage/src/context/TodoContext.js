import { createContext, useContext } from 'react';

export const TodoContext = createContext({
    todos: [{
        todo: "",
        id: 1,
        completed: false
    }],
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    editTodo: (id, todo) => { },
    toggleComplete: (id) => { }
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;