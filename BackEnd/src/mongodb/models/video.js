const { model, Schema } = require('mongoose');

const videoSchema = new Schema({
    codigo: Number,
    url: String,
    transcricao: String
});

const videoModel = model('Video', videoSchema);

module.exports = videoModel;