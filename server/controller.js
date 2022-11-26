import {v4 as uuid} from 'uuid'
import Note from './model';


const controller = (req,res)=>{
    console.log(req.query)
    const action = req.query.action;

    if(!action){
        return res.send({error:true,message:"The server does not understand the request"})
    }
    switch (action) {
        case "create":
          createNote(req,res)
          break;
        case "update":
          updateNote(req,res)
          break;
        case "get":
           getNote(req,res)
          break;
        case "delete":
          deleteNote(req,res)
          break;
      }
}






 

const createNote = async(req,res)=>{
    const id = uuid()
    const {title,body} = req.query;

    const createnote = await Note.create({id,title,body});
    return res.send({success:true,data:createnote})
}




const updateNote = async(req,res)=>{
    const {id,title,body} = req.query;
    const updatenote = await Note.update({ title,body}, {where: {id}});
    return res.send('data udpated')
    
}

const getNote = async(req,res)=>{
    const notes = await User.findAll();
    return res.send({success:true,data:notes})
}

const deleteNote = (req,res)=>{
    const id = req.query.id;
    const deletenote = Note.destroy({where: {id}});
}
export default controller;