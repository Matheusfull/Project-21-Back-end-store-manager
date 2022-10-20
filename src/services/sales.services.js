const salesModel = require('../models/sales.model');

const findAllSales = async () => {
  const response = await salesModel.findAll();
  return response;
};

const findByIdSales = async (id) => {
  const response = await salesModel.findById(id);
  return response;
};

module.exports = {
  findAllSales,
  findByIdSales,
};