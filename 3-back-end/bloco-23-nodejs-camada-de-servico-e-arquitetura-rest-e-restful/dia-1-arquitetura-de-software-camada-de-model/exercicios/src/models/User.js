const connection = require('./connection');

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

const validate = async ({ firstName, lastName, email, password }) => {
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

async function insert({ firstName, lastName, email, password }) {
  const insertQuery = 'INSERT INTO users_crud.users '
    + '(`first_name`, `last_name`, `email`, `password`) VALUES (?,?,?,?);';
  await connection.query(insertQuery, [firstName, lastName, email, password]);

  const getQuery = 'SELECT `id` FROM users_crud.users order by id desc limit 1;';
  const [[result]] = await connection.query(getQuery);
  return { id: result.id, firstName, lastName, email };
}

const get = async () => {
  const query = 'SELECT * FROM users_crud.users;';
  const [result] = await connection.query(query);
  return result;
};

const getById = async (id) => {
  const query = 'SELECT * FROM users_crud.users WHERE id = ?';
  const [[result]] = await connection.query(query, [id]);
  return result;
};

const edit = async (id, { firstName, lastName, email, password }) => {
  const querySelect = 'SELECT * FROM users_crud.users WHERE id = ?';
  const [[result]] = await connection.query(querySelect, [id]);
  if (!result || result === []) return { message: 'User not Found' };
  const queryUpdate = 'UPDATE users_crud.users SET `first_name` = ?,'
    + ' `last_name` = ?, `email` = ?, `password` = ? WHERE id = ?;';
  await connection.query(queryUpdate, [firstName, lastName, email, password, id]);
  return { id, firstName, lastName, email };
};

module.exports = {
  validate,
  insert,
  get,
  getById,
  edit,
};
