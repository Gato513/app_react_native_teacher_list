const express = require('express');
const router = express.Router();

const profesorController = require("../controllers/profesor.controllers");

router.get("/profesores", profesorController.getProfesores);

module.exports = router;