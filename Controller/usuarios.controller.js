const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuarios.model');

router.get('/', async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
});

router.post('/', async (req, res) => {
  const usuario = new Usuario(req.body);
  await usuario.save();
  res.json(usuario);
});

router.get('/:id', async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  res.json(usuario);
});

router.put('/:id', async (req, res) => {
  const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(usuario);
});

router.delete('/:id', async (req, res) => {
    await Usuario.findByIdAndRemove(req.params.id);
    res.json({ message: 'Usuario eliminado' });
  });
  
  module.exports = router;