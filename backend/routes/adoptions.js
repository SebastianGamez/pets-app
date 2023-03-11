const router = require("express").Router();
const { request } = require("express");
const { Adoptions } = require("../db.js");

//Obtener 
router.get('/', (req, res) => {
    res.json([]);
});

//Un solo usuario
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
    });
});

//Crear una adopcion
router.post('/', async (req, res) => {
    const adoption = await Adoptions.create(req.body);
    res.json(adoption);
});


module.exports = router;