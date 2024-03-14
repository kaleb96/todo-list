import React from "react";
import { RiCloseLine } from 'react-icons/ri'
const Note = ({noteList}) => {

    return(
        <div className="note">
            {noteList.map((note, index) => (
                <div
                    key={index}
                >
                <div>
                    {note.text}
                </div>
                    <RiCloseLine
                    className="delete-icon"
                    ></RiCloseLine>
                </div>
            ))}

        </div>
    )
}

export default Note;