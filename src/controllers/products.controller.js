const productsService = require('../services/products.services');

const reponseProducts = async (_req, res) => {
  const productsAll = await productsService.findAllProducts();
  return res.status(200).json(productsAll);
};

const reponseProductsById = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const productId = await productsService.findByIdProducts(Number(id));
    return res.status(200).json(productId);
  } catch (err) {
    console.log(err);
    return res.status(404).json({ message: 'Product not found' });
  }
};

module.exports = {
  reponseProducts,
  reponseProductsById,
};