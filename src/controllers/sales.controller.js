const salesServices = require('../services/sales.services');

const reponseSales = async (_req, res) => {
  const productsAll = await salesServices.findAllSales();
  return res.status(200).json(productsAll);
};

const reponseSalesById = async (req, res) => {
  const { id } = req.params;
  const productsAll = await salesServices.findByIdSales(id);
  if (productsAll.length === 0) return res.status(404).json({ message: 'Sale not found' });
  return res.status(200).json(productsAll);
};

module.exports = {
  reponseSales,
  reponseSalesById,
};