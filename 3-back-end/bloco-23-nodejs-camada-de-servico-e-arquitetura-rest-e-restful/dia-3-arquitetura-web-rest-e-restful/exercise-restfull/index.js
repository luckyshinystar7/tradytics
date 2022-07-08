require('dotenv').config();

const express = require('express');
const productRouter = require('./routes/productRoute');
const bodyParser = require('body-parser');


const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', productRouter);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
