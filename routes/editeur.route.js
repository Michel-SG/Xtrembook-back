const express = require('express');
const router = express.Router();
const editeurController = require('../controllers/editeur.controller');

router.get('/', editeurController.getAll);
router.post('/', editeurController.add);


module.exports = router;