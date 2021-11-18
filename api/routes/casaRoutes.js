const CasaController = require('')
const { Router } = require('express');
const router = Router()

// router.get('/listall', CasaController.listarTudo)
// router.get('/listid/:id', CasaController.buscaPorId)
router.post('/add', CasaController.adicionar)
// router.put('/update/:id', CasaController.atualizar)
// router.delete('/delete/:id', CasaController.apagar )

module.exports = router;