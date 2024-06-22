const { model, Schema } = require('mongoose');

const pessoaSchema = new Schema({
    codigo: Number,
    nome: String,
    imagem: Buffer
});

const pessoaModel = model('Sobrevivente', pessoaSchema);

module.exports = pessoaModel;