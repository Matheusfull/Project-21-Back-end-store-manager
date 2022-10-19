const express = require('express');
const productsController = require('../controllers/products.controller');
const { validadeName } = require('../middlewares/validateProductName');

const router = express.Router();

router.get('/', productsController.reponseProducts);
router.get('/:id', productsController.reponseProductsById);
router.post('/', validadeName, productsController.reponseProductInsert);

module.exports = router;