import {useState} from 'react';
import {Note} from './Note';


export const NoteList = ()=>{
    const [notes,setNotes] = useState(['2',3,4,5,6,7,8,9]);


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