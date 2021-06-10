const express = require('express');
const router = express.Router();
const livreController = require('../controllers/livre.controller');

router.get('/:referenceArticle', livreController.getOneById);


module.exports = router;