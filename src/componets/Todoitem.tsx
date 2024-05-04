import { useState } from "react";
import { Todo } from "../types/todo";
import DeleteTodoForm from "./DeleteTodoForm";

interface TodoItemProps{
    todo: Todo;
    todos:Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
    onCompletedChange: (id: number, completed: boolean) => void;
}

export default function TodoItem({ todo,onCompletedChange,setTodos ,todos}: TodoItemProps) {
    return(
        <div>
            <label className="flex items-center font-bold gap-10 border capitalize rounded-md p-2 w-11/12 border-gray-400 bg-white hover:bg-slate-700 hover:border-none hover:text-white hover:text-2xl hover:h-18">
                <div className="w-full">
                <input type="checkbox" checked={todo.completed} onChange={(e) => onCompletedChange(todo.id, e.target.checked)} className="scale-125 hover:size-4"/>
                <span className={` px-2 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                    {todo.title}
                </span>
                </div>
                <DeleteTodoForm aTodo={todo} todos={todos} setTodos={setTodos}/>
            </label>
        </div>
    )
}