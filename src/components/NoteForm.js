import React, { useState} from "react";

const NoteForm = (props) => {

    const [input, setInput] = useState('');

    const handleChange = (e) => {

        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        props.onSubmit({
            text: input
        })
        setInput('');
    }

    return (
        <form className="note-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="make your note!"
                name="text"
                className="note-input-edit"
                value={input}
                onChange={handleChange}
            ></input>
            <button className="note-button-edit">check</button>
        </form>
    )
}

export default NoteForm;