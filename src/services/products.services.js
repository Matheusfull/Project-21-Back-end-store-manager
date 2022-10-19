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

const updateProduct = async (name, id) => {
  await productsModel.update(name, id);
  const productUpdate = await productsModel.findById(id);
  console.log('to na service');
  return productUpdate;
};

module.exports = {
  findAllProducts,
  findByIdProducts,
  insertProduct,
  updateProduct,
};