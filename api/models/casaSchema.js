const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    tipo: { type: String, required: true},
    localizacao: { type: String, required: true},
    valor: { type: Number, required: true},
    imagemURL: { type: String, required: true},
});

module.exports = mongoose.model("casas" , schema);