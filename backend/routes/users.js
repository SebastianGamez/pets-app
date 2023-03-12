const router = require("express").Router();
const { request } = require("express");
const {Users} = require("../db.js");


const validateIfExists=async(userId)=>{
    const user=await Users.findOne({where:{id: userId}});
    return (user)?true:false;
}
//Obtener todos los usuarios
router.get('/',async(req, res) => {
    const users = await Users.findAll();
    res.json(users);
});

//Un solo usuario
router.get('/:id', async(req, res) => {
    const { id } = req.params;
    console.log(id);
    const user = await Users.findOne({where:{id}});

    res.json(user);
});

//Crear un usuario
router.post('/', async (req, res) => {
    const {name, address, phone, email}=req.body;
    if (!name|| !address || !phone || !email) {
        res.status(400).json("Faltan parametros");
        return;
    }
    const user = await Users.create(req.body);
    res.json(user);
});

//put
router.put('/:id',async(req,res)=>{
    const userId=req.params.id;
    const exists= await validateIfExists(userId); //Este es un booleano que me dice si existe el registro o no.
    if(exists){
        await Users.update(req.body,{
            where:{
                id:userId
            }
        });
        res.json({success:'Se ha modificado correctamente'});
    }else{
        res.status(404);
        res.json({error:`No se encontró ningun usuario con el id:${userId}`});
    }
  
});

//Eliminar usuario
router.delete('/:id',async(req,res)=>{
    const userId=req.params.id;
    const exists= await validateIfExists(userId);
    if(exists){
        await Users.destroy({
            where:{id:userId}
        })
        res.json({success:'Se ha borrado el usuario exitosamente'});
    }else{
        res.status(404);
        res.json({error:`No se encontró ningun usuario con el id:${petId}`});
    }
   
});


module.exports = router;