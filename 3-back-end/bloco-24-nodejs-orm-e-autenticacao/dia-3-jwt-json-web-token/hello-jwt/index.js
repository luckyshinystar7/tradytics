require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const secret = 'apenasParaAprendizado';

const { PORT } = process.env;

const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', controllers.ping);

const validateUser = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || username.length < 5) {
    return res.status(400).json({ message: 'Invalid username' });
  }
  if (!password || password.length < 5) {
    return res.status(400).json({ message: 'Invalid password' });
  }
  return next();
};

app.post('/login', validateUser, (req, res) => {
  const { username, password } = req.body;

  if (username === 'user1' && password === '12345') {
    const token = jwt.sign({ username, admin: false }, secret, { expiresIn: '1h' });
    return res.json({ token });
  }
  if (username === 'admin' && password === 's3nh4S3gur4???') {
    const token = jwt.sign({ username, admin: true }, secret, { expiresIn: '1h' });
    return res.json({ token });
  }
  res.status(401).end();
});

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
