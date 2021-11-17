const mongoose = require('mongoose');

const schemaCasa = new mongoose.Schema({
    tipo: { type: String, required: true},
    localizacao: { type: String, required: true},
    valor: { type: Number, required: true},
    imagemURL: { type: String, required: true},
});

const Casa = mongoose.model("casas", schemaEscritorio);

module.exports = Casa;