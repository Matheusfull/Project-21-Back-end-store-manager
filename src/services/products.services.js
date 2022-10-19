const productsModel = require('../models/products.model');

const findAllProducts = async () => {
  const response = await productsModel.findAll();
  return response;
};

const findByIdProducts = async (productId) => {
  const response = await productsModel.findById(productId);
  if (!response) {
    throw new Error('Id não encontrado');
  }
  return response;
};

const insertProduct = async (name) => {
  const productInsertedId = await productsModel.insert(name);
  const newProduct = await productsModel.findById(productInsertedId);
  return newProduct;
};

module.exports = {
  findAllProducts,
  findByIdProducts,
  insertProduct,
};