const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article.controller');

router.get('/', articleController.getAll);
router.post('/', articleController.add);
router.post('/search', articleController.getAllByParameter);


module.exports = router;