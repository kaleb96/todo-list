import React, { useState} from "react";
import NoteForm from './NoteForm';
import { IoIosCloseCircle, IoMdCheckmarkCircle } from 'react-icons/io'
import { CiEdit } from 'react-icons/ci';

const Note = ({noteList, deleteNote, updateNote, completeNote}) => {
    
    const [edit, setEdit] = useState({
        id: null,
        text : '',
    })
    const submitUpdate = (e) => {
        
        updateNote(e)

        setEdit({ //edit 초기화
            id: null,
            text: '',
        })
    }

    if(edit.id) {
        return <NoteForm edit={edit} onSubmit={submitUpdate}></NoteForm>
    }

    return(
        <div className="note">
            {noteList.map((note, index) => (
                <div
                    className = {note.isComplte ? 'note-row complete' : 'note-row'}
                    key={index}
                >
                <div>
                    {note.text}
                </div>
                    <div className='icons'>
                        <IoIosCloseCircle
                        className="delete-icon"
                        onClick={() => deleteNote(note)}
                        ></IoIosCloseCircle>
                        <CiEdit
                            className="edit-icon"
                            onClick={() => setEdit({ id: note.id, text: note.text })}
                        ></CiEdit>
                        <IoMdCheckmarkCircle
                            className="check-icon"
                            onClick={() => completeNote(note)}
                        ></IoMdCheckmarkCircle>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Note;