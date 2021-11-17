const express = require("express");  
const rotas = require('./api/routes/index')

const app = express();  
require('dotenv').config(); 
const cors = require("cors");  
app.use(express.json());  
const port = process.env.PORT||3001
const Conn = require("./api/models/conn/index"); 

Conn(); 

app.use(cors());
app.options("*", cors()); 
rotas(app)

app.get('/', (req,res) => {
    res.status(200).json({message:"API ok"});
});
app.listen(port, ()=>{
    console.log(`SERVER RUNNING AT PORT ${port}`)
})