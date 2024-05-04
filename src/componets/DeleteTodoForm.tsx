import { useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { Todo } from '../types/todo';

interface DeleteTodoFormProps {
    aTodo: Todo;
    todos:Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function DeleteTodoForm({ aTodo, setTodos,todos }: DeleteTodoFormProps) {
    const [animate, setAnimate] = useState(false);

    const handleClick = (todoToDelete: Todo) => {
        setAnimate(!animate);
        deleteForms(todoToDelete);
    };

    const deleteForms = (todoToDelete: Todo) => {
        const updatedTodos = todos.filter(todo => todo.id !== todoToDelete.id);
        setTodos(updatedTodos);
    };

    return (
        <div className="h-full size-10">
                <IoTrashOutline
                    className={`text-red-500 font-black size-full hover:text-red-400 ${animate ? 'animate-ping' : ''}`}
                    onClick={() => handleClick(aTodo)}
                />
        </div>
    );
}
