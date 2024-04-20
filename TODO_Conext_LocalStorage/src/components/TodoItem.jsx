import React from 'react'
import { useState } from 'react'
import { useTodo } from '../context';

function TodoItem({ todo }) {
    const { todos, editTodo, deleteTodo, toggleComplete } = useTodo();

    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);

    const edit = () => {
        editTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false)
    }

    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex border
             border-black/10 rounded-lg px-3 py-1.5 gap-x-3 
             shadow-sm shadow-white/50 duration-300 
              text-black 
              ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"}`
            }
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border  w-full outline-none
                bg-transparent rounded-lg 
                ${isTodoEditable ? "border-black/10 px-2" :
                        "border-transparent"} 
                ${todo.completed ? "text-red-700 font-bold line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 
                rounded-lg text-sm border border-black/10 
                justify-center items-center bg-green-500
                 hover:bg-green-400 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        edit();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "Save" : "Edit"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 
                text-sm font-extrabold text-gray-600 border
                rounded-full
                 border-black/10 justify-center 
                 items-center bg-red-600
                  hover:bg-red-400 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                X
            </button>
        </div>
    );
}

export default TodoItem;


