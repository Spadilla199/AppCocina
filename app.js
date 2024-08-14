const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/aplicacionCocina', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

const usuariosRoute = require('./routes/usuarios.route');
const recetasRoute = require('./routes/recetas.route');
const leccionesRoute = require('./routes/lecciones.route');
const progresoUsuarioRoute = require('./routes/progresoUsuario.route');
const feedbackRoute = require('./routes/feedback.route');
const recompensasRoute = require('./routes/recompensas.route');

app.use('/usuarios', usuariosRoute);
app.use('/recetas', recetasRoute);
app.use('/lecciones', leccionesRoute);
app.use('/progresoUsuario', progresoUsuarioRoute);
app.use('/feedback', feedbackRoute);
app.use('/recompensas', recompensasRoute);

app.listen(3000, () => {
  console.log('Server started on port 3000');
});