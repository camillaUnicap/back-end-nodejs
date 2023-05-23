require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do banco de dados
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão com o banco de dados:'));
db.once('open', function() {
  console.log('Conexão bem-sucedida com o banco de dados.');
});

app.use(express.json());

// Carrega os serviços
const listaService = require('./services/listaService');
const itemService = require('./services/itemService');
const usuarioService = require('./services/usuarioService');

// Rotas CRUD para Itens
app.post('/itens', itemService.create);
app.get('/itens', itemService.getAll);
app.get('/itens/:id', itemService.getById);
app.put('/itens/:id', itemService.update);
app.delete('/itens/:id', itemService.remove);

// Rotas CRUD para Listas
app.post('/listas', listaService.create);
app.get('/listas', listaService.getAll);
app.get('/listas/:id', listaService.getById);
app.put('/listas/:id', listaService.update);
app.delete('/listas/:id', listaService.remove);

// Rotas CRUD para Usuários
app.post('/usuarios', usuarioService.create);
app.get('/usuarios', usuarioService.getAll);
app.get('/usuarios/:id', usuarioService.getById);
app.put('/usuarios/:id', usuarioService.update);
app.delete('/usuarios/:id', usuarioService.remove);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


