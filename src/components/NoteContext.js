import { getNodeText } from "@testing-library/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const NoteContext = createContext();


export const NoteContextProvider = (props)=>{
    const [shouldShowForm,setShouldShowForm]  = useState(false);
    const [shouldShowNote,setShouldShowNote] = useState(false);
    const [currentNote,setCurrentNote] = useState('');
    const [currentNoteId,setCurrentNoteId] = useState('')
    const [notes,setNotes] = useState([]);
    
    const [currentTitle,setCurrentTitle] = useState(false)
    const [currentBody,setCurrentBody] = useState(false)

    const [noteStatus,setNoteStatus] = useState(false)

    const getNote = async(currentNoteId)=>{

        if(!currentNoteId){
            return;
        }
        const data = {
            action:"get",
            get:"single",
            id:currentNoteId
        }
        const response = await axios({
            url:"http://localhost:4000",
            method:"post",
            data:data,
            headers:{
                "content-type":"application/json"
            }
        })
        
        setCurrentTitle(response.data.data.title)
        setCurrentBody(response.data.data.body)
        setCurrentNote(response.data.data)
        setCurrentNoteId(response.data.data.id)
    }

    const getNotes = async()=>{
        const data = {
          action:"get",
          get:"all"
        }
        const response = await axios({
            url:"http://localhost:4000",
            method:"post",
            data:data,
            headers:{
                "Content-Type":"application/json"
            }
        })


        setNotes(response.data.data)
    }

    useEffect(()=>{getNotes()},[])
    return(
        <NoteContext.Provider value={{
            shouldShowForm,
            setShouldShowForm,
            shouldShowNote,
            setShouldShowNote,
            notes,
            setNotes,
            currentNoteId,
            setCurrentNoteId,
            currentNote,
            setCurrentNote,
            getNote,
            currentTitle,
            setCurrentTitle,
            currentBody,
            setCurrentBody,
            noteStatus,
            setNoteStatus
        }}>
            {props.children}
        </NoteContext.Provider>
    );
}