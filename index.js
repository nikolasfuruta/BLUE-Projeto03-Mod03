const express = require("express");  
const rotas = require('./api/routes/index');
const Conn = require("./api/models/conn/index");
const cors = require("cors");  
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./swagger.json");


const app = express();  
Conn(); 

app.use(express.json());  
app.use(cors());
app.options("*", cors()); 
app.use("/docs",swaggerUi.serve, swaggerUi.setup(swaggerDoc));

rotas(app);

const port = process.env.PORT||3001;
app.listen(port, ()=>{
    console.log(`SERVER RUNNING AT PORT ${port}`);
})