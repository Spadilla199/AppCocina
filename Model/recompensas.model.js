const mongoose = require('mongoose');

const recompensaSchema = new mongoose.Schema({
  id_recompensa: { type: String, unique: true },
  id_usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  tipo_recompensa: String,
  descripcion: String,
  fecha_obtencion: Date
});

const Recompensa = mongoose.model('Recompensa', recompensaSchema);

module.exports = Recompensa;