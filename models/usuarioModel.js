// Modelo para usuarios

const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
        unique: true,
    },
    contraseña: {
        type: String,
        required: true,
    },
    // Otros campos que puedas necesitar...
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
