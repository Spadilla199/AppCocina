const express = require('express');
const router = express.Router();
const Leccion = require('../models/lecciones.model');

router.get('/', async (req, res) => {
  const lecciones = await Leccion.find();
  res.json(lecciones);
});

router.post('/', async (req, res) => {
  const leccion = new Leccion(req.body);
  await leccion.save();
  res.json(leccion);
});

router.get('/:id', async (req, res) => {
  const leccion = await Leccion.findById(req.params.id);
  res.json(leccion);
});

router.put('/:id', async (req, res) => {
  const leccion = await Leccion.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(leccion);
});

router.delete('/:id', async (req, res) => {
  await Leccion.findByIdAndRemove(req.params.id);
  res.json({ message: 'Lección eliminada' });
});

module.exports = router;