const express = require('express')
const router = express.Router()

// Certifique-se de que o caminho está correto e que o arquivo UserRoutes.js existe
router.use('/api/users', require('./userRoutes'))

router.get('/test', (req, res) => {
    res.json({ message: 'Rota test ok!' })
})

module.exports = router
