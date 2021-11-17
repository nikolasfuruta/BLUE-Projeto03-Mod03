const mongoose = require('mongoose');
const { config } = require('dotenv');

module.exports = () => {

    config();
    const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}/${process.env.DB_DB}`
    mongoose
            .connect(connectionString, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            .then(()=>{console.log("CONECTADO AO MONGODB")})
            .catch((err)=>{console.err({"NÃO CONECTADO AO MONGODB": err.message})})
}