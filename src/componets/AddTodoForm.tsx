import { useState } from "react";

interface AddTodoFormProps {
    onSubmit: (title: string) => void
}

export default function AddTodoForm({ onSubmit }: AddTodoFormProps ) {
    const [initialValue, setInitialValue] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();

        if (!initialValue.trim()) {
            return;
        }
        else{
            onSubmit(initialValue)
            setInitialValue('')
        }
        

    }

    return(
        <form className="flex justify-around" onSubmit={handleSubmit}>
            <input type="text" placeholder="What should be done??" className="rounded-s-md h-10 w-full placeholder:text-xl" value={initialValue} onChange={(event) => setInitialValue(event.target.value)}/>
            <button type="submit" className="rounded-e-md bg-black text-white border-white border-2 hover:bg font-bold mx-10 w-28">
                Add
            </button>
        </form>
    )
}