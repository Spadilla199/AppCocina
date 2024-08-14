const mongoose = require('mongoose');

const progresoUsuarioSchema = new mongoose.Schema({
  id_progreso: { type: String, unique: true },
  id_usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  id_leccion: { type: mongoose.Schema.Types.ObjectId, ref: 'Leccion' },
  fecha_completado: Date,
  puntuacion: Number,
  recompensas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recompensa' }]
});

const ProgresoUsuario = mongoose.model('ProgresoUsuario', progresoUsuarioSchema);

module.exports = ProgresoUsuario;