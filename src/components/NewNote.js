import {useEffect, useState} from 'react';
import axios from 'axios';
import { useContext } from "react"
import { NoteContext } from "./NoteContext"
const api = process.env.REACT_APP_API_URL;


export const NewNote = ()=>{
    const {setShouldShowForm,setNotes,notes} = useContext(NoteContext)
    


    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    
    const createNote = async(e)=>{
        e.preventDefault()

        
        if(!title || !body){
            return;
        }
   
        const data = {
            title,
            body,
            action:"create"
        }
        
        
        const response = await axios({
            method:'post',
            url:api,
            headers:{
                "Content-Type":"application/json"
            },
            data:data
        })
        
     
        setShouldShowForm(false)
        setTitle('')
        setBody('')
        setNotes([response.data.data,...notes])
    }

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
                <form>
                    <input type="text" placeholder="Note Title"
                     value={title} 
                    onChange={(e)=>setTitle(e.target.value)}
    
                    />
                    <textarea  id="" cols="30" rows="10" placeholder="Note Body"
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                    ></textarea>

                    <div className='note-btn-container'>
                        <button className="note-btn"
                        type='submit'
                       
                        onClick={createNote}
                        >Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}