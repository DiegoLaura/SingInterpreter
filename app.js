// Importar librerías
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Crear la aplicación Express
const app = express();

// Configuración de la aplicación
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
const indexRouter = require('./routes/index');
const usuariosRouter = require('./routes/usuarios');

app.use('/', indexRouter);
app.use('/', usuariosRouter);

// Manejador de errores
app.use((req, res, next) => {
  const error = new Error('Ruta no encontrada');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      mensaje: error.message,
    },
  });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
