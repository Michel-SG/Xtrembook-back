const express = require('express');
const router = express.Router();
const auteurController = require('../controllers/auteur.controller');

router.get('/', auteurController.getAll);
router.post('/', auteurController.add);


module.exports = router;