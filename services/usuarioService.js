const Usuario = require('../components/usuario');

async function create(req, res) {
  try {
    const usuario = new Usuario(req.body);
    await usuario.save();
    res.status(201).json(usuario);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar o usuário.' });
  }
}

async function getAll(req, res) {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar usuários.' });
  }
}

async function getById(req, res) {
  try {
    const usuario = await Usuario.findById(req.params.id);
    res.json(usuario);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar o usuário.' });
  }
}

async function update(req, res) {
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(usuario);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar o usuário.' });
  }
}

async function remove(req, res) {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar o usuário.' });
  }
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
