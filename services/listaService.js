const Lista = require('../components/lista');

async function create(req, res) {
  try {
    const lista = new Lista(req.body);
    await lista.save();
    res.status(201).json(lista);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar a lista.' });
  }
}

async function getAll(req, res) {
  try {
    const listas = await Lista.find();
    res.json(listas);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar listas.' });
  }
}

async function getById(req, res) {
  try {
    const lista = await Lista.findById(req.params.id);
    res.json(lista);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar a lista.' });
  }
}

async function update(req, res) {
  try {
    const lista = await Lista.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(lista);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar a lista.' });
  }
}

async function remove(req, res) {
  try {
    await Lista.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar a lista.' });
  }
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
