const TerrenoController = require('')
const { Router } = require('express');
const router = Router()

router.get('/listall', TerrenoController.listarTudo)
router.get('/listid/:id', TerrenoController.buscaPorId)
router.post('/add', TerrenoController.adicionar)
router.put('/update/:id', TerrenoController.atualizar)
router.delete('/delete/:id', TerrenoController.apagar )

module.exports = router;