const mongoose = require("mongoose");

async function Conn(){
    require('dotenv').config(); 
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_BASE}`,{ 
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => { 
        console.log("MongoDB esta conectado");
    }).catch((err) => { 
        console.error(err.message);
    });
}

module.exports = Conn;