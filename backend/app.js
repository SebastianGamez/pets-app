//Creo mi aplicación en express.
const express = require('express');
const cors = require('cors');
const users = require('./routes/users.js');
const app = express();
const adoption =require('./routes/adoptions.js');

//Middleware para poder procesar los json de las peticiones.
app.use(express.json());//Recibir informacion.
app.use(cors());//Habilitar otras aplicaciones para realizar solicitudes a nuestra app.

//Llamo a db.js para que se realice la sincronización con la base de datos.
require('./db.js');
//Levantamos el servidor.
app.use("/users",users);
app.use("/adoptions",adoption);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`El servidor está escuchando en: http://localhost:${port}`)
});
