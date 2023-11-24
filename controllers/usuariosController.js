// Controlador para las rutas de usuarios

const usuariosController = {
    getRegistro: (req, res) => {
        res.render('registro');
    },

    postRegistro: (req, res) => {
        // Lógica de registro de usuario
        res.redirect('/');
    },

    getInicioSesion: (req, res) => {
        res.render('login');
    },

    postInicioSesion: (req, res) => {
        // Lógica de inicio de sesión
        res.redirect('/');
    },

    // Otros métodos de usuarios...
};

module.exports = usuariosController;
