import {FaBeer} from 'react-icons/fa';
import { AddButton } from './AddButton';
import { useContext } from 'react';


import {Header} from './Header';
import { NoteList } from './NoteList';
import { NewNote } from './NewNote';
import {NoteContext, NoteContextProvider } from './NoteContext';
import {EditNote} from './EditNote';


export const HomePage = ()=>{
    const {shouldShowForm,
        shouldShowNote
    } = useContext(NoteContext);
    

    return(
        <>
         
            <Header/>
            <NoteList/>
            <AddButton/>
            {shouldShowForm && <NewNote/>}
            {shouldShowNote && <EditNote/>}
            
         
    
        </>
    )
}