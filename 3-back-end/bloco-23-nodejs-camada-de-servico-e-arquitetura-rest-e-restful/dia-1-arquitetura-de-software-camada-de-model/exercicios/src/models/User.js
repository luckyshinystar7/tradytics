const connection = require('./connection');

const x = {
  firstName: 'Calebe',
  lastName: 'Junior',
  email: 'calebe.junior@gmail.com',
  password: 'd496d5ea2442',
};

const validateFields = async ({firstName, lastName, email, password}) => {
  // fazer validações (retornar um objeto com 2 chaves
  // {
  //   "error": true,
  //   "message": "O campo 'password' deve ter pelo menos 6 caracteres"
  // })
};

module.exports = {
  validateFields,
};
