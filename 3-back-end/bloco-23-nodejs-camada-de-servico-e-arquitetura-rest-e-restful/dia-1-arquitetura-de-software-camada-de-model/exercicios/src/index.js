const express = require('express');
const User = require('./models/User');

const app = express();
app.use(express.json());

app.post('/user', async (req, res) => {
  if (!User.validateFields(req.body)) {
    res.status(400).json({ error: true, message: 'Preencha todos os campos' });
  }
});

app.listen(3000, () => {
  console.log('Rodando na porta 3000');
});
