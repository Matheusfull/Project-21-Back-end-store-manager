const express = require('express');
const { reponseProducts,
  reponseProductsById,
  reponseProductInsert,
  reponseProductsUpdate,
  reponseProductsDelete } = require('../controllers/products.controller'); 
const { validadeName } = require('../middlewares/validateProductName');
const { validadeId } = require('../middlewares/validadeProductId');

const router = express.Router();

router.get('/', reponseProducts);
router.get('/:id', reponseProductsById);
router.post('/', validadeName, reponseProductInsert);
router.put('/:id', validadeName, validadeId, reponseProductsUpdate);
router.delete('/:id', validadeId, reponseProductsDelete);

module.exports = router;