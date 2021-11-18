const EscritorioController = require('')
const { Router } = require('express');
const router = Router()

router.get('/listall', EscritorioController.listarTudo)
router.get('/listid/:id', EscritorioController.buscaPorId)
router.post('/add', EscritorioController.adicionar)
router.put('/update/:id', EscritorioController.atualizar)
router.delete('/delete/:id', EscritorioController.apagar )

module.exports = router;