import {FaBeer} from 'react-icons/fa';
import { AddButton } from './AddButton';



import {Header} from './Header';
import { NoteList } from './NoteList';
import { NewNote } from './NewNote';


export const HomePage = ()=>{
    return(
       
        <>
         <Header/>
         <NoteList/>
         <AddButton/>
         <NewNote/>
      
        </>
    )
}