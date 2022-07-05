require('dotenv').config();

const cepControllers = require('./controllers/cepControllers');

const express = require('express');

const rescue = require('express-rescue');

const app = express();

app.use(express.json());

app.get('/ping', rescue(cepControllers.getAll));

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`rodando na porta ${PORT}`);
});
