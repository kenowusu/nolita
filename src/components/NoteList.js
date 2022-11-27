import {useContext, useState} from 'react';
import {Note} from './Note';
import { NoteContext } from './NoteContext';


export const NoteList = ()=>{

    const {notes} = useContext(NoteContext)
    


    return(
        <div className='notelist'>
            <div className="notelist-container">
                {notes.map(note => {
                return  (<Note/>)
                })}
            </div>
           
        </div>
    )
}