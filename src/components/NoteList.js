import {useContext, useState} from 'react';
import {Note} from './Note';
import { NoteContext } from './NoteContext';
import {v4 as uuid} from 'uuid'

export const NoteList = ()=>{

    const {notes} = useContext(NoteContext)
    


    return(
        <div className='notelist' >
            <div className="notelist-container">
                {notes.map(note => {
                return  (<Note key={uuid()} note={note}/>)
                })}
            </div>
           
        </div>
    )
}