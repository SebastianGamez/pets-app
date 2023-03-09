//Este archivo tiene todas las configuraciones de la conexión con mi base de datos.
//Al exportar este archivo también se exportan los modelos de la aplicación.

//1. IMPORTO SEQUELIZE A MI PROYECTO Y LO INSTANCIO
const Sequelize=require('sequelize');
                            //(name_DB,usuario,contraseña)
const sequelize=new Sequelize('pet_db','root','Abc1234567890',{
    host:'localhost',
    dialect:'mysql'
})

//2.TRAIGO MIS MODELOS PREVIAMENTE CREADOS EN UN FICHERO DE LA CARPETA MODELS.
//NOTA: Como lo tengo definido como una función, acá debo ejecutarla pasándole los parámetros que requiere.




const racesModel=require('./models/races.js');
const Races=racesModel(sequelize,Sequelize);

const petsModel=require('./models/pets.js');
const Pets=petsModel(sequelize,Sequelize,Races);

const usersModel=require('./models/users.js');
const Users=usersModel(sequelize,Sequelize);

const adoptionsModel=require('./models/adoptions.js');
const Adoptions=adoptionsModel(sequelize,Sequelize,Pets,Users);


//3.SINCRONIZAMOS NUESTROS MODELOS YA CREADOS CON LA BASE DE DATOS...
sequelize.sync({force:false})
    .then(()=>{
        console.log("Tablas Sincronizadas")
    })

//4.EXPORTO ESTOS MODELOS PARA USARLOS EN CULAQUER PARTE DE MI APLICACIÓN.
module.exports={
    Adoptions,
    Pets,
    Races,
    Users
}
