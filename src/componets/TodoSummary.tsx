import type { Todo } from "../types/todo"
// import './styles/button.css'

interface TodoSummaryProps {
     todos: Todo[];
     setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoSummary({todos, setTodos} : TodoSummaryProps) {
    const completedTodos = todos.filter(todo => todo.completed);
    const checker = ()=> {
    const updatedTodos = todos.filter((todo) => !todo.completed);
        setTodos(updatedTodos)
}

    return (
        <div className="text-center space-y-7 text-white">
            {todos.length === 0 ? 
            '' 
            :
            <p>
                {completedTodos.length}/{todos.length} Todo{completedTodos.length > 1 ? 's' : ''} completed.
            </p>}

            {completedTodos.length > 0 ? 
                <button className="text-white bg-black border-4 rounded-md w-6/12 h-12 font-bold" onClick={checker}>
                    Delete all completed items!
                </button> 
                
                :

                ''
        }
        </div>
    )
}