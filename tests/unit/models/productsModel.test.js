const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const travelModel = require('../../../src/models/products.model');

const { products } = require('./mocks/products.model.mock');

describe('Testes na camada model', function () {
  afterEach(sinon.restore);
  describe('Testando as funções findAll e FindById', function () {
    
    it('Listando os produtos, findAll', async function () {
      sinon.stub(connection, 'execute').resolves([products]);

      const result = await travelModel.findAll();

      expect(result).to.be.deep.equal(products);

    })
    it('Listando produto pelo id, FindById', async function () {
      sinon.stub(connection, 'execute').resolves([[products[0]]]);

      const result = await travelModel.findById(1);

      expect(result).to.be.deep.equal(products[0]);

    })
  })

})