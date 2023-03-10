//Creo mi aplicación en express.
const express=require('express');
const app=express();

//Middleware para poder procesar los json de las peticiones.
app.use(express.json());

//Llamo a db.js para que se realice la sincronización con la base de datos.
require('./db.js');

//Traigo mi router de pets y lo uso en mi app.
const petsRouter=require('./routers/pets.js');
app.use('/api/v1/pets',petsRouter);
//Traigo mi router de races y lo uso en mi app.
const racesRouter=require('./routers/races.js');
app.use('/api/v1/races',racesRouter);


app.get('/',(req,res)=>{
  res.send('Hola Mundo desde Node.js con Express y Sequelize');
});



//Levantamos el servidor.
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`El servidor está escuchando en: http://localhost:${port}`)
});
