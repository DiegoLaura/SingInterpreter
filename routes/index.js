const express = require('express');
const router = express.Router();

// Ruta principal
router.get('/', (req, res) => {
    res.render('index');
});

// Otras rutas...

module.exports = router;
