import { useState } from "react";
import "./styles/button.css";

interface AddTodoFormProps {
  onSubmit: (title: string) => void;
}

export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  const [initialValue, setInitialValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!initialValue.trim()) {
      return;
    } else {
      onSubmit(initialValue);
      setInitialValue("");
    }
  };

  return (
    <form className="flex justify-around" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="input rounded-s-md h-10 w-full"
          value={initialValue}
          onChange={(event) => setInitialValue(event.target.value)}
          placeholder=" "
        />
        <label className="user-label">Enter Something todo!!</label>
      </div>

      <button
        type="submit"
        className="button rounded-e-md bg-black text-white border-white border-2 hover:bg font-bold mx-10 w-28"
      >
        <span className="button__text">Add</span>
        <span className="button__icon">
          <svg
            className="svg"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="12" x2="12" y1="5" y2="19"></line>
            <line x1="5" x2="19" y1="12" y2="12"></line>
          </svg>
        </span>
      </button>
    </form>
  );
}
