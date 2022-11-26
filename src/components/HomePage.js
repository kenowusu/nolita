import {FaBeer} from 'react-icons/fa';
import { AddButton } from './AddButton';



import {Header} from './Header';
import { NoteList } from './NoteList';



export const HomePage = ()=>{
    return(
       
        <>
         <Header/>
         <NoteList/>
         <AddButton/>
      
        </>
    )
}