import {useEffect, useState} from 'react';
import axios from 'axios';
import { useContext } from "react"
import { NoteContext } from "./NoteContext"

export const NewNote = ()=>{
    const {setShouldShowForm} = useContext(NoteContext)
    


    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    
    const createNote = async()=>{
        
        const data = {
            title,
            body,
            action:"create"
        }

        const response = await axios({
            method:'post',
            url:"http://localhost:4000",
            headers:{
                "Content-Type":"application/json"
            },
            data:{
                action:"create",
                title,
                body:data
            }
        })

        console.log(response)
    }

    const hideForm = (e)=>{ 
        setShouldShowForm(false)    
    }

    useEffect(()=>{
      createNote()
    },[title,body])
    return(
        <div className="newnote"
        onClick={hideForm}
        >
            <div className="newnote-form"
            onClick={(e)=>e.stopPropagation()}
            >
                <form action="">
                    <input type="text" placeholder="Note Title"
                     value={title} 
                    onChange={(e)=>setTitle(e.target.value)}
    
                    />
                    <textarea  id="" cols="30" rows="10" placeholder="Note Body"
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                    ></textarea>

                    <div>
                        <button className="note-btn">Done</button>
                    </div>
                </form>
            </div>
        </div>
    )
}