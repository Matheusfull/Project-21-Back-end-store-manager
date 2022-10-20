const express = require('express');
const { reponseSales, reponseSalesById } = require('../controllers/sales.controller');

const router = express.Router();

router.get('/', reponseSales);
router.get('/:id', reponseSalesById);

module.exports = router;