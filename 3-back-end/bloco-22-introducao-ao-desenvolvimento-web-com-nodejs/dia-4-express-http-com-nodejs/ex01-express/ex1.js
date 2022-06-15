// 1. Crie uma array drinks com os seguintes objetos dentro dela e uma rota GET /drinks que retorna a lista de bebidas.

// const express = require('express');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();
// const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

// app.get('/drinks', function (_req, res) {
//   res.json(drinks);
// })

// SORTED DRINKS
app.get('/drinks', function (_req, res) {
  res.json(drinks.sort(function (a, b) {
    if (a.price > b.price) return 1
    if (a.price < b.price) return -1
    return 0
  }));
}); 


// QUERY STRING
app.get('/recipes/search', function (req, res) {
  const { name, maxPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name) && r.price < Number(maxPrice));
  res.status(200).json(filteredRecipes);
});

app.get('/drinks/search', function (req, res) {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((d) => d.name.includes(name))
  res.status(200).json(filteredDrinks);
})

app.get('/recipes', function (_req, res) {
  res.json(recipes);
});

// PARAMETROS DE ROTA
app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!' });

  res.status(200).json(recipe);
});

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((r) => r.id === Number(id));

  if (!drink) return res.status(404).json({ message: 'Recipe not found!' });

  res.status(200).json(drink);
});

// ...
app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime });
  res.status(201).json({ message: 'Recipe created successfully!' });
});

// http :3001/validateToken Authorization:abc # vai devolver token inválido
// http :3001/validateToken Authorization:S6xEzQUTypw4aj5A # vai devolver token válido
app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({ message: 'Invalid Token!' })

  res.status(200).json({ message: 'Valid Token!' })
});

app.post('/drinks', function (req, res) {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(201).json({ message: 'Drink created successfully!' });
});

// PUT ATUALIZANDO INFORMAÇÕES
// exemplo -> no HTTPie ->
//            http PUT :3001/recipes/2 name='Macarrão ao alho e óleo' price:=40
app.put('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes[recipeIndex] = { ...recipes[recipeIndex], name, price };

  res.status(204).end();
});

//...
// DELETE
// exemplo -> HTTPie ->
//            http DELETE :3001/recipes/3
app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === Number(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});


// Crie uma rota PUT /drinks/:id que permita editar os atributos de uma bebida.
app.post('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  drinkIndex = drinks.find(d => d.id === Number(id));

  if (drinkIndex === -1) return res.status(404).json({ message: 'Drink not found! ' });
  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  res.status(204).end();
})

// Crie uma rota DELETE /drinks/:id que permita remover uma bebida.
app.delete('/drinks/:id', function (req, res) {
  const { id } = req.params;
  drinkIndex = drinks.findIndex(d => d.id === Number(id));

  if (drinkIndex === - 1) return res.status(404).json({message: 'Drink not found! '});

  drinks.splice(drinkIndex, 1);

  res.status(204).end();
})

// CONFIGURANDO RESPOSTA PARA TENTATIVA DE ACESSO A ROTA NÃO MAPEADA
app.all('*', function (req, res) {
	return res.status(404).json({ message: `Rota '${req.path}' não existe!`});
});

app.listen(3001);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});

/* // EXEMPLOS DE REQUISIÇÃO COM HEADER ATRAVÉS DO FRONTEND

// Requisição do tipo PUT
fetch(`http://localhost:3001/recipes/2`, {
  method: 'PUT',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Macarrão ao alho e óleo',
    price: 40
  })
});

// Requisição do tipo DELETE
fetch(`http://localhost:3001/recipes/4`, {
  method: 'DELETE',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
}); */
