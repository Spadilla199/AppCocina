const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedback.model');

router.get('/', async (req, res) => {
  const feedback = await Feedback.find();
  res.json(feedback);
});

router.post('/', async (req, res) => {
  const feedback = new Feedback(req.body);
  await feedback.save();
  res.json(feedback);
});

router.get('/:id', async (req, res) => {
  const feedback = await Feedback.findById(req.params.id);
  res.json(feedback);
});

router.put('/:id', async (req, res) => {
  const feedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(feedback);
});

router.delete('/:id', async (req, res) => {
  await Feedback.findByIdAndRemove(req.params.id);
  res.json({ message: 'Feedback eliminado' });
});

module.exports = router;recompensas.controller.js

