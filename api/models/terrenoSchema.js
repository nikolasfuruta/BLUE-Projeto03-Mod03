const mongoose = require('mongoose');

const schemaTerreno = new mongoose.Schema({
    tipo: { type: String, required: true},
    localizacao: { type: String, required: true},
    valor: { type: Number, required: true},
    imagemURL: { type: String, required: true},
});

const Terreno = mongoose.model("terrenos", schemaTerreno);

module.exports = Terreno;