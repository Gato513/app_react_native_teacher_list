//! Importación de módulos
const express = require('express'); //? Framework Express
const router = express.Router();    //? Función para crear un enrutador modular

//! Importación del controlador
const profesorController = require("../controllers/profesor.controllers");  //? Controlador que maneja la lógica de los profesores

//! Definición de rutas
//? Define la ruta GET "/profesores" y la asocia con la función "getProfesores" del controlador
router.get("/profesores", profesorController.getProfesores);

//! Exportación del enrutador
module.exports = router;    //? Exporta el enrutador para ser usado en otras partes de la aplicación
