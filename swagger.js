const swaggerAutogen = require('swagger-autogen');

const swaggerJson = './swagger.json'
const endPoints = ['./api/routes/index.js']

const doc = {
    info: {
        version: "1.0.0",
        title:"Aplicativo de Oferta de Imóveis",
        description: "API para cadastrar imóveis para serem ofertados, separando-os por tipos e especificando seus valores e localizações."
    }
}

swaggerAutogen(swaggerJson, endPoints)
.then(()=>{
    require('./index.js')
})  