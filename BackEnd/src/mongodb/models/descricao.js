//Descricao.js
const { model, Schema } = require('mongoose');

const descricaoSchema = new Schema({
    codigo: Number,
    descricao: String
});

const descricaoModel = model('Descricao', descricaoSchema);

module.exports = descricaoModel;