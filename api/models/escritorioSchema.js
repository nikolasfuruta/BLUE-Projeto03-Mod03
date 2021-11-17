const mongoose = require('mongoose');

const schemaEscritorio = new mongoose.Schema({
    tipo: { type: String, required: true},
    localizacao: { type: String, required: true},
    valor: { type: Number, required: true},
    imagemURL: { type: String, required: true},
});

const Escritorio = mongoose.model("escritorios", schemaEscritorio);

module.exports = Escritorio;