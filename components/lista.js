const mongoose = require('mongoose');

const listaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true,
  },
});

module.exports = mongoose.model('Lista', listaSchema);
