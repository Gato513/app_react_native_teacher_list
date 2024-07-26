const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* routs
const profesorRouters = require('./routes/porfesor.routes');
app.use("/api/", profesorRouters);

app.listen(port, () => console.log(`Listening on port: ${port}`));