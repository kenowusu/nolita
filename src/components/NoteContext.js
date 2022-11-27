import axios from "axios";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const NoteContext = createContext();


export const NoteContextProvider = (props)=>{
    const [shouldShowForm,setShouldShowForm]  = useState(false);
    const [shouldShowNote,setShouldShowNote] = useState(false);
    const [notes,setNotes] = useState([])
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
            setNotes
        }}>
            {props.children}
        </NoteContext.Provider>
    );
}