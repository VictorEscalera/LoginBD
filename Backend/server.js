require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Usuario = require('./models/Usuario');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Conectado a MongoDB'))
  .catch(err => console.error('❌ Error de conexión:', err));

// Ruta de login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email, password });

    if (usuario) {
      res.json({ mensaje: '✅ Login exitoso' });
    } else {
      res.status(401).json({ mensaje: '❌ Credenciales incorrectas' });
    }
  } catch (err) {
    res.status(500).json({ mensaje: '❌ Error del servidor', error: err });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
