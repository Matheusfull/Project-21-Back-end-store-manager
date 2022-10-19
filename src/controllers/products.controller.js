const productsService = require('../services/products.services');

const reponseProducts = async (_req, res) => {
  const productsAll = await productsService.findAllProducts();
  return res.status(200).json(productsAll);
};

const reponseProductsById = async (req, res) => {
  const { id } = req.params;
  try {
    const productId = await productsService.findByIdProducts(Number(id));
    return res.status(200).json(productId);
  } catch (err) {
    return res.status(404).json({ message: 'Product not found' });
  }
};

const reponseProductInsert = async (req, res) => {
  const { name } = req.body;
  try {
    const product = await productsService.insertProduct(name);
    // const productInsert = await productsService.findByIdProducts(Number(insertId));
    return res.status(201).json(product);
  } catch (err) {
    return res.status(422).json({ message: 'product not inserted' });
  }
};

module.exports = {
  reponseProducts,
  reponseProductsById,
  reponseProductInsert,
};