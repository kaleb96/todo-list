import React, { useState } from "react";

import NoteForm from './NoteForm';
import Note from './Note';
const NoteList = () => {

    //state
    const [noteList, setNoteList] = useState([]);

    //functions
    // add new Note
    const addNote = (e) => {

        if (!e.text || /^\s*$/.test(e.text)) {
            return
        }
        const newList = [e, ...noteList]
        console.log(newList);
        setNoteList(newList);
    }


    return (
        <div className="note-list">
            <h2>make your plan to make it plan</h2>
            <NoteForm onSubmit={addNote}></NoteForm>
            <Note
                noteList={noteList}
            ></Note>
        </div>
    )

}

export default NoteList;