const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

router.post('/create', UserController.createUser)

router.get('/useteste', (req, res) => {
    res.json({ message: "rota use test ok" })
})

module.exports = router
