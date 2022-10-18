const { run } = require('./connection');

const findAll = async () => {
  const [result] = await run(
    'SELECT * FROM StoreManager.products ORDER BY id',
  );
  return result;
}; 

const findById = async (productId) => {
  const [[result]] = await run(
    'SELECT * FROM StoreManager.products WHERE id = ?', [productId],
  );
  return result;
};

module.exports = {
  findAll,
  findById,
};
