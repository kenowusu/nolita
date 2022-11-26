import { useContext } from "react"
import { NoteContext } from "./NoteContext"

export const NewNote = ()=>{
    const {setShouldShowForm} = useContext(NoteContext)
    
    const hideForm = (e)=>{
        
        
        setShouldShowForm(false)
       
    }
    return(
        <div className="newnote"
        onClick={hideForm}
        >
            <div className="newnote-form"
            onClick={(e)=>e.stopPropagation()}
            >
                <form action="">
                    <input type="text" placeholder="Note Title"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Note Body"></textarea>

                    <div>
                        <button className="note-btn">Done</button>
                    </div>
                </form>
            </div>
        </div>
    )
}