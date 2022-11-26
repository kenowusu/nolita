import { useContext } from "react"
import { NoteContext } from "./NoteContext"

export const EditNote = ()=>{
    const {setShouldShowNote} = useContext(NoteContext)
    
    const hideForm = (e)=>{
        
        
        setShouldShowNote(false)
       
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
                    <textarea name="" id="" cols="30" rows="10" placeholder="Note Body">
                        I am an editable Note
                    </textarea>
                </form>)
            </div>
        </div>
    )
}