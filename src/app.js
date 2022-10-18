const express = require('express');
const routers = require('./routers/products.router');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', routers);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;

/*
Requisito 1
Vamos fazer o requisito vindo da camada mais interna para a mais externa
1 - Construiremos a camada model em que terá as SQL para listar todos os produtos e os produtos por id
2 - Depois teremos a camada controller
3 - Os routes
4 - Depois passar esses routes para o app.js
*/