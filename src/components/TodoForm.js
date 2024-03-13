import React, { useState } from "react";

const TodoForm = (props) => { // props = onSumit으로 전달한 key 값

    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        
        setInput('');
    }
    return (
        <form className ="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input
                        type="text"
                        placeholder="update your item"
                        name="text"
                        className="todo-input edit"
                        value={input}
                        onChange={handleChange}
                    ></input>
                    <button className="todo-button edit">Update</button>
                </>
            ) : (
                <>
                    <input
                        text="text"
                        placeholder="Add a todo"
                        name="text"
                        className="todo-input"
                        value={input}
                        onChange={handleChange}
                    ></input>
                    <button className="todo-button">Add</button>
                </>
            )}
        </form>
    )
}

export default TodoForm;