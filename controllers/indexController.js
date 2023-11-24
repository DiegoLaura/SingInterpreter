// Controlador para la ruta principal

const indexController = {
    getIndex: (req, res) => {
        res.render('index');
    },
};

module.exports = indexController;
