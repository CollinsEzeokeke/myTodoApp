import { Todo } from "../types/todo";

interface TodoItemProps{
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
}

export default function TodoItem({ todo,onCompletedChange }: TodoItemProps) {
    return(
        <div>
            <label className="flex items-center font-bold gap-2 border capitalize rounded-md p-2 w-11/12 border-gray-400 bg-white hover:bg-slate-700 hover:border-none hover:text-white hover:text-2xl hover:h-18">
                <input type="checkbox" checked={todo.completed} onChange={(e) => onCompletedChange(todo.id, e.target.checked)} className="scale-125 hover:size-4"/>
                <span className={todo.completed ? 'line-through text-gray-400' : ''}>
                    {todo.title}
                </span>
            </label>
        </div>
    )
}