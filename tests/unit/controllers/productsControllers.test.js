const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productsServices = require('../../../src/services/products.services')
const productsController = require('../../../src/controllers/products.controller')

const products = require('../models/mocks/products.model.mock');

describe('Testes na camada controller', function () {
  describe('Testando as funções reponseProducts e reponseProductsById', function () {
    it('Listando os produtos, reponseProducts', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsServices, 'findAllProducts').resolves(products);

      await productsController.reponseProducts(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(products);

    })

    it('Listando os produtos, reponseProductsById', async function () {
      const res = {};
      const req = { params: { id: 1 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsServices, 'findByIdProducts').resolves(products[0]);

      await productsController.reponseProductsById(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(products[0]);

    })
  })
  describe('testando a função reponseProductInsert', function () {
    it('Listando os produtos, reponseProductInsert', async function () {
      const res = {};
      const req = {
        body: {
          name: "ProdutoX"
        }
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsServices, 'insertProduct').resolves({
        id: 4,
        name: "ProdutoX"
      });

      await productsController.reponseProductInsert(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith({
        id: 4,
        name: "ProdutoX"
      });

    })
  })

})
