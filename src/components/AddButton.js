import {MdAdd} from 'react-icons/md';

export const AddButton = ()=>{

    return(
        <button className='addButton'>
            <span><MdAdd/></span>
            <span>New</span>
        </button>
    )
}