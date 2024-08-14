const mongoose = require('mongoose');

const recetaSchema = new mongoose.Schema({
  id_receta: { type: String, unique: true },
  titulo: String,
  descripcion: String,
  nivel: String,
  ingredientes: [{ type: String }],
  pasos: [{ type: String }],
  tiempo_preparacion: Number,
  media: [{ type: String }]
});

const Receta = mongoose.model('Receta', recetaSchema);

module.exports = Receta;