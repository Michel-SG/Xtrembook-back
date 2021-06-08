const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article.controller');

router.get('/', articleController.getAll);
router.post('/', articleController.add);


module.exports = router;