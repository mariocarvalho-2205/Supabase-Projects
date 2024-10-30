express = require('express');
const router = express.Router();
const AlunosController = require('../controller/AlunosController');
const upload = require('../db/upload')




router.post('/create', upload.single('file'), AlunosController.createAluno);

module.exports = router;