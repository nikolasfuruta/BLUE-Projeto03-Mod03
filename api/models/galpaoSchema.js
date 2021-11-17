const mongoose = require('mongoose');

const schemaGalpao = new mongoose.Schema({
    tipo: { type: String, required: true},
    localizacao: { type: String, required: true},
    valor: { type: Number, required: true},
    imagemURL: { type: String, required: true},
});

const Galpao = mongoose.model("galpoes", schemaGalpao);

module.exports = Galpao;