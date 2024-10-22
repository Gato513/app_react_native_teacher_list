//! Importación de módulos
const express = require('express');  //? Framework para crear el servidor
const cors = require('cors');        //? Middleware para habilitar CORS

//! Creación de la aplicación y puerto
const app = express();               //? Inicializa una instancia de la aplicación Express
const port = 8000;                   //? Define el puerto en el que va a escuchar la app

//! Middlewares
app.use(cors());                     //? Permite solicitudes desde diferentes dominios
app.use(express.json());             //? Permite recibir datos en formato JSON en las solicitudes
app.use(express.urlencoded({ extended: true })); //? Permite recibir datos de formularios, incluso objetos anidados

//! Definición de rutas
const profesorRouters = require('./routes/porfesor.routes');  //? Importa las rutas definidas para "profesor"
app.use("/api/", profesorRouters);   //? Asigna todas las rutas que empiezan con "/api/" a las rutas importadas

//! Iniciar el servidor
app.listen(port, () => console.log(`Listening on port: ${port}`)); //? Inicia el servidor y muestra un mensaje en la consola
