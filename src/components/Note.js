import { useContext, useEffect } from "react"
import { NoteContext } from "./NoteContext"
import moment from 'moment';
import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import { getNodeText } from "@testing-library/react";





export const Note = ({note})=>{

    const  {currentNoteId,setCurrentNoteId,getNote} = useContext(NoteContext)
    const {setShouldShowNote} = useContext(NoteContext)

    const setId = (e)=>{
       let target = e.target;
       setShouldShowNote(true)
       for(let i=0;i<5;i++){
         if(target.classList.contains('note')){
            break;
         }
         target = target.parentNode;
       }
       
       
       const id = target.getAttribute('noteid')
      
    
       getNote(id);
  
    }

    return(
        <div className="note" noteid={note.id}>
            <div className="note-container"
            onClick={setId}
            >
                <div className="note-timestamp">
                    <span className="createdAt">
                      {moment(note.createdAt).format('LLLL')}
                    </span>
                    <span className="updatedAt">Last update: {moment(note.updatedAt).fromNow()}</span>
                </div>
                <div className="note-body">
                   {note.body}
                </div>
            </div>

        </div>
    )
}