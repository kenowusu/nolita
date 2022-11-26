

import './style/main.scss';

import { HomePage } from './components/HomePage';
import { NoteContextProvider } from './components/NoteContext';


const App = ()=>{


  return(
    <div>
      <NoteContextProvider>
         <HomePage/>
      </NoteContextProvider>
      
    </div>
  )
}

export default App;
