import axios from 'axios';
import { useContext, useEffect } from "react"
import { NoteContext, NoteContextProvider } from "./NoteContext"
import {MdDelete} from 'react-icons/md'
export const EditNote = (L)=>{
    const {setShouldShowNote,
        currentNote,
        setCurrentNote,
        currentNoteId,
        setCurrentNoteId,
        currentTitle,
        setCurrentTitle,
        currentBody,
        setCurrentBody,
        noteStatus,
        setNoteStatus,
        setNotes,
        notes
    } = useContext(NoteContext)
   
    const hideForm = (e)=>{
        setShouldShowNote(false)
        setCurrentNote(false)
        setCurrentNoteId(false)
        setNoteStatus(false)
       
    }

    const updateNote = async(e)=>{
       
       if(!currentTitle || !currentBody || !currentNoteId){
        return;
       }

       setNoteStatus("updating..")
       const data = {
        action:"update",
        id:currentNote.id,
        title:currentTitle,
        body:currentBody
       }

       const response = await axios({
        url:"http://localhost:4000",
        method:"post",
        data:data
       })
       
       const indexOfUpdatedNote = notes.findIndex((note)=>{
        return note.id == currentNote.id;
       })

       if(indexOfUpdatedNote >= 0 ){
        let copiedNotes = [...notes];


        let copiedNote = {...currentNote}
           copiedNote.title = currentTitle;
           copiedNote.body = currentBody;
           copiedNotes.splice(indexOfUpdatedNote,1)
           copiedNotes.splice(indexOfUpdatedNote,0,copiedNote)
           
           setNotes(copiedNotes)

           console.log(copiedNotes)
       }

    //    console.log(indexOfUpdatedNote)
    //    return
    
  
       if(response.data[0] == 1){
        setTimeout(() => {
            setNoteStatus('updated')
        }, 2000);
         
       }
    }

    const deleteNote = async(e)=>{
        e.preventDefault();
        

        const index = notes.findIndex((obj)=>{
           return  obj.id === currentNoteId
        })

         notes.splice(index,1);

     
    
        const data = {
            action:"delete",
            id:currentNote.id,
            
        }
        
 
       
        
        const response = await axios({
            url:"http://localhost:4000",
            method:"post",
            data:data
        })


        if(index  >= 0 ){
            const newNotes =  notes.filter((note)=>{
                return note.id !== currentNoteId
            })
            
            setNotes(newNotes)
        }

        hideForm()
    
    }
 
    useEffect(()=>{
        updateNote()
    },[currentTitle,currentBody])
    return(
        <div className="newnote"
        onClick={hideForm}
        >   
            
            <div className="newnote-form"
            onClick={(e)=>e.stopPropagation()}
            >   
                
            
                <form action="">
                   {(currentNoteId) &&( <div className="newnote-delete-container" onClick={(e)=>e.stopPropagation()}>
                        <button className='newnote-delete' onClick={deleteNote}>
                            <MdDelete/>
                        </button>
                    </div>)}
                    
                    <div className="newnote-status">{noteStatus ? noteStatus : ""}</div>
                    <input type="text" placeholder="Note Title"
                    value={ typeof currentTitle != "boolean" ? currentTitle : "loading..."}
                    onChange={(e)=>setCurrentTitle(e.target.value)}
                     disabled={!currentNoteId ? true : false}
                    />
                    <textarea name="" id="" cols="30" rows="10" placeholder="Note Body"
                    value={typeof currentBody != "boolean" ? currentBody : "loading..."}
                    onChange={(e)=>setCurrentBody(e.target.value)}
                    disabled={!currentNoteId ? true : false}
                    ></textarea>

                        <div className='note-btn-container'>
                        <button className="note-btn"
                        type='submit'
                       
                        onClick={hideForm}
                        >Done</button>
                    </div>
                </form>
            </div>
        </div>
    )
}