const express = require('express');
const router = express.Router();
const ProgresoUsuario = require('../models/progresoUsuario.model');

router.get('/', async (req, res) => {
  const progreso = await ProgresoUsuario.find();
  res.json(progreso);
});

router.post('/', async (req, res) => {
  const progreso = new ProgresoUsuario(req.body);
  await progreso.save();
  res.json(progreso);
});

router.get('/:id', async (req, res) => {
  const progreso = await ProgresoUsuario.findById(req.params.id);
  res.json(progreso);
});

router.put('/:id', async (req, res) => {
  const progreso = await ProgresoUsuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(progreso);
});

router.delete('/:id', async (req, res) => {
  await ProgresoUsuario.findByIdAndRemove(req.params.id);
  res.json({ message: 'Progreso eliminado' });
});

module.exports = router;