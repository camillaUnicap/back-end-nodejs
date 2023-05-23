const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  quantidade: {
    type: Number,
    required: true,
  },
  lista: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lista',
    required: true,
  },
});

module.exports = mongoose.model('Item', itemSchema);
