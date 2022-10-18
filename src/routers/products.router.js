const express = require('express');
const productsController = require('../controllers/products.controller');

const router = express.Router();

router.get('/', productsController.reponseProducts);
router.get('/:id', productsController.reponseProductsById);

module.exports = router;