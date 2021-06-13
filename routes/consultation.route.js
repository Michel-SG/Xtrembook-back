const express = require('express');
const router = express.Router();
const consultationController = require('../controllers/consultation.controller');

router.get('/', consultationController.getAll);
router.post('/', consultationController.add);

module.exports = router;