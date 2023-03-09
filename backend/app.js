//Creo mi aplicación en express.
const express=require('express');
const app=express();

//Middleware para poder procesar los json de las peticiones.
app.use(express.json());

//Llamo a db.js para que se realice la sincronización con la base de datos.
require('./db.js');


app.get('/',(req,res)=>{
  res.send('Hola Mundo desde Node.js con Express y Sequelize');
});



//Levantamos el servidor.
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`El servidor está escuchando en: http://localhost:${port}`)
});
