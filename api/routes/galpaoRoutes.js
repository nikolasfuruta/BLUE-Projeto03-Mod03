const GalpaController = require('./../controllers/galpaoController');
const { Router } = require('express');
const router = Router();

router.get('/listall', GalpaController.listarTudo);
router.get('/listid/:id', GalpaController.buscaPorId);
router.post('/add', GalpaController.adicionar);
router.put('/update/:id', GalpaController.atualizar);
router.delete('/delete/:id', GalpaController.apagar );

module.exports = router;