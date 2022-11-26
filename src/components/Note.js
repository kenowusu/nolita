import { useContext } from "react"
import { NoteContext } from "./NoteContext"

export const Note = ()=>{
    const {setShouldShowNote} = useContext(NoteContext)
    return(
        <div className="note">
            <div className="note-container"
            onClick={()=>setShouldShowNote(true)}
            >
                <div className="note-timestamp" onClick={(e)=>e.stopPropagation()}>
                    <span className="createdAt">November 25,2022. 8.59pm</span>
                    <span className="updatedAt">Last update: 2days ago</span>
                </div>
                <div className="note-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting 
                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                    galley of type and scrambled it to make a type specimen book.
                </div>
            </div>

        </div>
    )
}