const Item = require('../components/item');

async function create(req, res) {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar o item.' });
  }
}

async function getAll(req, res) {
  try {
    const itens = await Item.find();
    res.json(itens);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar itens.' });
  }
}

async function getById(req, res) {
  try {
    const item = await Item.findById(req.params.id);
    res.json(item);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar o item.' });
  }
}

async function update(req, res) {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(item);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar o item.' });
  }
}

async function remove(req, res) {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao deletar o item.' });
  }
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove,
};
