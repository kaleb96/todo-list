import React, { useState} from "react";

const NoteForm = (props) => {

    const [input, setInput] = useState('');

    const handleChange = (e) => {

        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(props.edit) {
            props.onSubmit({
                id: props.edit.id,
                text: input
            })
        } else {
            props.onSubmit({
                id: Math.floor(Math.random() * 100000),
                text: input
            })
        }
  
        setInput('');
    }
    return (
        <form className="note-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                  <input
                        type="text"
                        placeholder="update your note!"
                        name="text"
                        className="note-input edit"
                        value={input}
                        onChange={handleChange}
                    ></input>
                    <button className="note-button edit">check</button>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        placeholder="make your note!"
                        name="text"
                        className="note-input edit"
                        value={input}
                        onChange={handleChange}
                    ></input>
                    <button className="note-button edit">check</button>
                </>

            )}
        </form>
    )
}

export default NoteForm;