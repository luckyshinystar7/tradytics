const userModel = require('../models/User');

const validateFirstName = (firstName) => {
  if (!firstName) {
    return {
      error: true,
      message: 'O campo firstName é obrigatório',
    };
  }
  return { error: false };
};

const validateLastName = (lastName) => {
  if (!lastName) {
    return {
      error: true,
      message: 'O campo lastName é obrigatório',
    };
  }
  return { error: false };
};

const validateEmail = (email) => {
  if (!email) {
    return {
      error: true,
      message: 'O campo "email" é obrigatório e deve possuir o seguinte formato: "email@email.com',
    };
  }
  return { error: false };
};

const validatePassword = (password) => {
  if (typeof password !== 'string' || password.length < 6) {
    return {
      error: true,
      message: 'O campo "password" deve ter pelo menos 6 caracteres',
    };
  }
  return { error: false };
};

const validate = ({ firstName, lastName, email, password }) => {
  // fazer validações (retornar um objeto com 2 chaves
  // {
  //   "error": true,
  //   "message": "O campo 'password' deve ter pelo menos 6 caracteres"
  // })
  if (validateFirstName(firstName).error) return validateFirstName(firstName);

  if (validateLastName(lastName).error) return validateLastName(lastName);

  if (validateEmail(email).error) return validateEmail(email);

  if (validatePassword(password).error) return validatePassword(password);

  return {
    error: false,
    message: null,
  };
};

const getAll = () => userModel.get();

const getById = (id) => userModel.getById(id);

const edit = (id, reqBody) => {
  if (!getById(id)) return null;
  return userModel.edit(id, reqBody);
};

module.exports = {
  validate,
  getAll,
  getById,
  edit,
};
