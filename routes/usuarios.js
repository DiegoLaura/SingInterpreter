const express = require('express');
const router = express.Router();

// Ruta de registro de usuarios
router.get('/registro', (req, res) => {
    res.render('registro');
});

// Ruta de inicio de sesión
router.get('/login', (req, res) => {
    res.render('login');
});

// Ruta de procesamiento de registro de usuarios
router.post('/usuarios/registro', (req, res) => {
    // Lógica de registro de usuario
    res.redirect('/');
});

// Ruta de procesamiento de inicio de sesión
router.post('/usuarios/login', (req, res) => {
    // Lógica de inicio de sesión
    res.redirect('/');
});

module.exports = router;
