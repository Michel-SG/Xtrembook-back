const express = require('express');
const router = express.Router();
const commandeValideeController = require('../controllers/commande-validee.controller');

router.get('/:numCommande', commandeValideeController.getCommande);


module.exports = router;