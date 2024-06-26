import { useState } from "react"
import TodoItem from "./componets/Todoitem"
import AddTodoForm from "./componets/AddTodoForm";
import type { Todo } from "./types/todo";
import TodoSummary from "./componets/TodoSummary";

function App() {

  const [ todos, setTodos ] = useState<Todo[]>([]);

  const setTodoCompleted = (id: number, completed: boolean) => {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => (
        todo.id === id ? {...todo, completed} : todo
      ))
  )
  }

  const addTodo = (title: string) => {
    setTodos((prevTodos) => [
      {
      id: prevTodos.length + 1,
      title,
      completed: false,
    },
    ...prevTodos
  ])
}


const onClickChange = (todo:Todo) =>{
  setTodos(prevItems => {
    const index = prevItems.indexOf(todo);
    if (index === -1) return prevItems; // Item not found, return the array as is
    const newItems = [...prevItems]; // Make a copy of the array
    newItems.push(newItems.splice(index, 1)[0]); // Move the item to the end
    return newItems;
  })
}

  return (
    <main className="py-10 bg-black min-h-screen ">
      <h1 className="font-bold text-4xl text-center text-white py-4">Your Todo</h1>
      <div className="max-w-lg mx-auto rounded-md w-screen space-y-6">
        <AddTodoForm onSubmit={addTodo}/>
        <div className="space-y-2">
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} todos={todos} setTodos={setTodos} onCompletedChange={setTodoCompleted} onClickChange={onClickChange}/>
          ))}
        </div>
        
        {todos.length === 0 && (
                <p className="text-center text-white font-bold text-lg p-2 mt-2">
                    No todo here yet add something!!!
                </p>
            )}
      </div>
      <TodoSummary todos={todos} setTodos={setTodos}/>
    </main>
  )
}

export default App
