const express = require('express');
const User = require('./models/User');

const app = express();
app.use(express.json());

app.post('/user', async (req, res) => {
  try {
    const validation = await User.validate(req.body);
    if (validation.error) {
      res.status(400).json(validation);
      return;
    }
    const insert = await User.insert(req.body);
    return res.status(201).json(insert);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

app.get('/user', async (_req, res) => {
  try {
    const result = await User.get();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

app.listen(3000, () => {
  console.log('Rodando na porta 3000');
});
