const express = require('express');
const router = express.Router();
const Receta = require('../models/recetas.model');

router.get('/', async (req, res) => {
  const recetas = await Receta.find();
  res.json(recetas);
});

router.post('/', async (req, res) => {
  const receta = new Receta(req.body);
  await receta.save();
  res.json(receta);
});

router.get('/:id', async (req, res) => {
  const receta = await Receta.findById(req.params.id);
  res.json(receta);
});

router.put('/:id', async (req, res) => {
  const receta = await Receta.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(receta);
});

router.delete('/:id', async (req, res) => {
  await Receta.findByIdAndRemove(req.params.id);
  res.json({ message: 'Receta eliminada' });
});

module.exports = router;