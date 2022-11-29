const express = require('express');
import controller from './controller.js';

const cors = require('cors');

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.post('/',controller);


app.get('/',(req,res)=>{
    return res.send("api server started...")
})
const port = 4000;
app.listen(port,()=>{
    console.log(`Server listening on port: ${port}`);
})