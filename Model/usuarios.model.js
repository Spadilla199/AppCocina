const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  id_usuario: { type: String, unique: true },
  nombre: String,
  correo_electronico: String,
  contraseña: String,
  nivel: String,
  foto_perfil: String,
  progreso: { type: mongoose.Schema.Types.ObjectId, ref: 'ProgresoUsuario' },
  preferencias: String
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;