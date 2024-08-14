const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  id_feedback: { type: String, unique: true },
  id_usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  id_leccion: { type: mongoose.Schema.Types.ObjectId, ref: 'Leccion' },
  comentarios: String,
  calificacion: Number
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;