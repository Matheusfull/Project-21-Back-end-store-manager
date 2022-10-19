const express = require('express');
const { reponseProducts,
  reponseProductsById,
  reponseProductInsert,
  reponseProductsUpdate } = require('../controllers/products.controller');
const { validadeName } = require('../middlewares/validateProductName');

const router = express.Router();

router.get('/', reponseProducts);
router.get('/:id', reponseProductsById);
router.post('/', validadeName, reponseProductInsert);
router.put('/:id', reponseProductsUpdate);

module.exports = router;