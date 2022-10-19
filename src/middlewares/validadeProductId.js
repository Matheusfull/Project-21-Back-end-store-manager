const { findById } = require('../models/products.model');

const validadeId = async (req, res, next) => {
  const { id } = req.params;
  const products = await findById(id);
  const msg = 'Product not found';
  console.log(products);
  if (products === undefined) return res.status(404).json({ message: msg });
  next();
};

module.exports = {
  validadeId,
};