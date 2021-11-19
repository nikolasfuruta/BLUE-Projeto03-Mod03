const ApartamentoController = require('../controllers/apartamentoController');
const { Router } = require('express');
const router = Router()

router.get('/listall', ApartamentoController.listarTudo)
router.get('/listid/:id', ApartamentoController.buscaPorId)
router.post('/add', ApartamentoController.adicionar)
router.put('/update/:id', ApartamentoController.atualizar)
router.delete('/delete/:id', ApartamentoController.apagar )

module.exports = router;