import React, {useState} from 'react'

export default function TodoForm(){
    const[input, setInput] = useState("")
    return(
        <form className="todo-form">
            <input 
                onChange={(e) => setInput(e.target.value)}
                className="todo-input" 
                placeholder="Add a todo"
            />
            <button className="todo-button">Add Todo</button>
        </form>
    );
}