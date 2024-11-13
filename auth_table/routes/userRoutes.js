const express = require('express')
const router = express.Router()

router.get('/useteste', (req, res) => {
    res.json({ message: "rota use test ok" })
})

module.exports = router
