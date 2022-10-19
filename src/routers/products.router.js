const express = require('express');
const productsController = require('../controllers/products.controller');

const router = express.Router();

router.get('/', productsController.reponseProducts);
router.get('/:id', productsController.reponseProductsById);
router.post('/', productsController.reponseProductInsert);

module.exports = router;