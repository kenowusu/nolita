import { useState } from "react";
import { createContext } from "react";

export const NoteContext = createContext();


export const NoteContextProvider = (props)=>{
    const [shouldShowForm,setShouldShowForm]  = useState(false);
    const [shouldShowNote,setShouldShowNote] = useState(false)
    return(
        <NoteContext.Provider value={{
            shouldShowForm,
            setShouldShowForm,
            shouldShowNote,
            setShouldShowNote
        }}>
            {props.children}
        </NoteContext.Provider>
    );
}