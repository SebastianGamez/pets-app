const router = require("express").Router();
const { request } = require("express");
const { Users } = require("../db.js");

//Obtener todos los usuarios
router.get('/', (req, res) => {
    res.json([]);
});

//Un solo usuario
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        id,
        name: "usuario",
    });
});

//Crear un usuario
router.post('/', async (req, res) => {
    const user = await Users.create(req.body);
    res.json(user);
});

//put
router.put('/:id', async (req, res) => {
    const userId = req.params.id;
    const exists = await validateIfExists(petId); //Este es un booleano que me dice si existe el registro o no.
    if (exists) {
        await Users.update(req.body, {
            where: {
                id: userId
            }
        });
        res.json({ success: 'Se ha modificado correctamente' });
    } else {
        res.status(404);
        res.json({ error: `No se encontró ningun usuario con el id:${userId}` });
    }

});

//Eliminar usuario
router.delete('/:id', async (req, res) => {
    const userId = req.params.id;
    const exists = await validateIfExists(userId);
    if (exists) {
        await Users.destroy({
            where: { id: userId }
        })
        res.json({ success: 'Se ha borrado el usuario exitosamente' });
    } else {
        res.status(404);
        res.json({ error: `No se encontró ningun usuario con el id:${petId}` });
    }

});


module.exports = router;