const mongoose = require('mongoose');

const leccionSchema = new mongoose.Schema({
  id_leccion: { type: String, unique: true },
  titulo: String,
  contenido: String,
  id_receta: { type: mongoose.Schema.Types.ObjectId, ref: 'Receta' },
  nivel: String,
  puntuacion: Number
});

const Leccion = mongoose.model('Leccion', leccionSchema);

module.exports = Leccion;