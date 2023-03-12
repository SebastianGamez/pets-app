// Importamos las librerías que vamos a utilizar.
const express = require('express');
const cors = require('cors');

//Importo los routers.
const users = require('./routes/users.js');
const adoption =require('./routes/adoptions.js');
const racesRouter=require('./routes/races.js');
const petsRouter=require('./routes/pets.js');


//Creo mi aplicación en express.
const app = express();

//Middleware para poder procesar los json de las peticiones.
app.use(express.json());//Recibir información.
app.use(cors());//Habilitar otras aplicaciones para realizar solicitudes a nuestra app.

//Llamo a db.js para que se realice la sincronización con la base de datos.
require('./db.js');

//Traigo mi router de pets y lo uso en mi app.
app.use('/api/v1/pets',petsRouter);
//Traigo mi router de races y lo uso en mi app.
app.use('/api/v1/races',racesRouter);

//Levantamos el servidor.
app.use("/api/v1/users",users);
app.use("/api/v1/adoptions",adoption);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`El servidor está escuchando en: http://localhost:${port}`)
});
