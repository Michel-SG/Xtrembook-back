const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/signup', userController.creerUser);
router.post('/login', userController.connexion);


module.exports = router;