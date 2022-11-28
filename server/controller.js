import {v4 as uuid} from 'uuid'
import Note from './model';
// import chalk from 'chalk'

const controller = (req,res)=>{
    const action = req.body.action;

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
    const {title,body} = req.body;

    const data = {
        id,
        title,
        body
    }

    try {
        const createnote = await Note.create(data);
        return res.send({success:true,data:createnote})
    } catch (error) {
        console.log(error)
        // console.log(chalk.red(error))
    }
  
    

}
 

  

const updateNote = async(req,res)=>{
    const {id,title,body} = req.body;

    const data = {
        title,
        body
    }

    try {
        const updatenote = await Note.update(data, {where: {id}});
        return res.send(updatenote)
    } catch (error) {
        console.log(error)
    }
  
    
} 

const getNote = async(req,res)=>{

    if(req.body.get == "all"){
        const notes = await Note.findAll({});
        return res.send({success:true,data:notes})
    }
   
    else if(req.body.get == "single"){
        const id = req.body.id;
        const note = await Note.findOne({where:{id:id}})
        return res.send({success:true,data:note})
    }
    else{
        
        res.end()
    }
} 

const deleteNote = (req,res)=>{
    const id = req.body.id;

    try {
        const deletenote = Note.destroy({where: {id}});
        return res.send({success:true,data:deletenote})
    } catch (error) {
        
    }
    
}
export default controller;