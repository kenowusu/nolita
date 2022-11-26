const express = require('express');
import controller from './controller.js';



const app = express();

app.get('/',controller);

const port = 4000;
app.listen(port,()=>{
    console.log(`Server listening on port: ${port}`);
})