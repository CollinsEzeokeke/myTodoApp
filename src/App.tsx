import { useState } from "react"
import TodoItem from "./componets/Todoitem"
import { dummyData } from "./data/todo"

function App() {

  const [ todos, setTodos ] = useState(dummyData);

  const setTodoCompleted = (id: number, completed: boolean) => {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => (
        todo.id === id ? {...todo, completed} : todo
      ))
  )
  }
  return (
    <main className="py-10 bg-black h-screen ">
      <h1 className="font-bold text-4xl text-center text-white py-4">Your Todo</h1>
      <div className="max-w-lg mx-auto rounded-md w-screen">
        <div className="space-y-2">
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} onCompletedChange={setTodoCompleted}/>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
