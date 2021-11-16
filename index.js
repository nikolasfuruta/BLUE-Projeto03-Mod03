const express = require('express');

const app = express();

const port = process.env.PORT||3001
app.set('port',port)
app.use(express.json());

app.listen(port, ()=>{
    console.log(`SERVER RUNNING AT PORT ${port}`)
})