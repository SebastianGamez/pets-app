const express=require('express');
const petsRouter=express.Router();

//Traigo mi modelo para poder trabajar con él en las peticiones.
const {Pets}=require('../db.js');

//Lo que llegue hasta aquí ya va a tener la ruta '/api/v1/'

//GET
petsRouter.get('/',async(req,res)=>{
    const pets=await  Pets.findAll();
    res.json(pets);
});
//GET POR ID
petsRouter.get('/:id',async(req,res)=>{
    const petId=req.params.id;
    const pet=await Pets.findOne({where:{id: petId}});
    if(pet){
        //Si se encontró la mascota con ese id entra aquí...
        res.json(pet);
    }else{
        res.status(404);
        res.json({error:`No se encontró ningún usuario con el id:${petId}`});
    }
});

//POST

petsRouter.post('/',async(req,res)=>{
    //TODO: Aquí hace falta validar el body que me envían en la petición.
    const pet=await Pets.create(req.body);
    res.json(pet);
});


module.exports=petsRouter;
