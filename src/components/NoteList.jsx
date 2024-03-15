import React, { useState } from "react";

import NoteForm from './NoteForm';
import Note from './Note';
const NoteList = () => {

    //state
    const [noteList, setNoteList] = useState([]);

    //functions
    // add new note
    const addNote = (e) => {

        if (!e.text || /^\s*$/.test(e.text)) {
            return
        }
        const newList = [e, ...noteList]
        setNoteList(newList);
    }

    // delete note
    const deleteNote = (e) => {

        // filter는 배열의 각 요소에 대해 제공된 함수로 평가한 결과가 true인 요소만 포함하는 새로운 배열을 생성
        const removedArr = noteList.filter(note => note.id !== e.id); //List에서 같은 text를 삭제
        setNoteList(removedArr);
    }

    //update note
    const updateNote = (e) => {

        if (!e.text || /^\s*$/.test(e.text)) {
            return
        }
        // 조건에 만족할때 note.text데이터를 edit 데이터로 변경후 새로운 배열 출력
        const updatedNote = noteList.map(note => {
            if(note.id === e.id) {
                note.text = e.text
                return note;
            } else {
                return  note;
            }
        })
        setNoteList(updatedNote)
    }
    
    //complete note
    const completeNote = (e) => {

        let updateNotes = noteList.map(note => {

            if(note.id === e.id) {
                note.isComplete = !note.isComplete
            } 
            return note
        })
        alert('complete')
        setNoteList(updateNotes);

    }

    return (
        <div className="note-list">
            <h3>🦒make your plan to make it plan</h3>
            <NoteForm onSubmit={addNote}></NoteForm>
            <Note
                noteList={noteList}
                deleteNote={deleteNote}
                updateNote={updateNote}
                completeNote={completeNote}
            ></Note>
        </div>
    )

}

export default NoteList;