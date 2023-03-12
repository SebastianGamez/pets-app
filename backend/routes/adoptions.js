const router = require("express").Router();
const { request } = require("express");
const { Adoptions } = require("../db.js");

//Obtener todos
router.get('/',async (req, res) => {
    const adoptions = await Adoptions.findAll();
    res.json(adoptions);
});

//Una sola adopcion
router.get('/:id',async (req, res) => {
    const { id } = req.params;
    const adoption= await Adoptions.findOne({where:{id}});
    res.json(adoption);
});

//Crear una adopcion
router.post('/', async (req, res) => {
    const {petId, userId}=req.body;
    if (!petId|| !userId) {
        res.status(400).json("Faltan parametros");
        return;
    }
    const adoption = await Adoptions.create(req.body);
    res.json(adoption);
});


module.exports = router;