import { useContext } from 'react';
import {MdAdd} from 'react-icons/md';
import { NoteContext } from './NoteContext';

export const AddButton = ()=>{
    const {setShouldShowForm} = useContext(NoteContext);
    return(
        <button className='addButton'
        onClick={()=>setShouldShowForm(true)}
        >
            <span><MdAdd/></span>
            <span>New</span>
        </button>
    )
}