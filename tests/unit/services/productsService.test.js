const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/products.model');
const productsServices = require('../../../src/services/products.services');

const { products } = require('../models/mocks/products.model.mock');

describe('Testes na camada service', function () {
  describe('Testando as funções findAllProducts e findByIdProducts', function () {
    afterEach(sinon.restore);
    it('Listando os produtos, findAllProducts', async function () {
      sinon.stub(productsModel, 'findAll').resolves(products);

      const result = await productsServices.findAllProducts();

      expect(result).to.be.deep.equal(products);

    })
    it('Listando produto pelo id, findByIdProducts', async function () {
      sinon.stub(productsModel, 'findById').resolves(products[0]);

      const result = await productsServices.findByIdProducts(1);

      expect(result).to.be.deep.equal(products[0]);

    })
  })

})