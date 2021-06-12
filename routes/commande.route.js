const express = require('express');
const router = express.Router();
const commandeController = require('../controllers/commande.controller');

router.post('/', commandeController.creerCommande);


module.exports = router;