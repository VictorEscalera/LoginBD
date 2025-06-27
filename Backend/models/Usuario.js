// Backend/models/Usuario.js
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  password: String
});

module.exports = mongoose.model('Usuario', usuarioSchema);
