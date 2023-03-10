const express=require('express');
const racesRouter=express.Router();

//Traigo mi modelo para poder trabajar con él en las peticiones.
const {Races}=require('../db.js');

//Lo que llegue hasta aquí ya va a tener la ruta '/api/v1/'
//GET
racesRouter.get('/',async(req,res)=>{
    const races=await  Races.findAll();
    res.json(races);
});

//POST
racesRouter.post('/',async(req,res)=>{
    //TODO: Aquí hace falta validar el body que me envían en la petición.
    const race=await Races.create(req.body);
    res.json(race);
});


module.exports=racesRouter;