const connection = require('./connection');

async function insert({ firstName, lastName, email, password }) {
  const insertQuery = 'INSERT INTO users_crud.users '
    + '(`first_name`, `last_name`, `email`, `password`) VALUES (?,?,?,?);';
  await connection.query(insertQuery, [firstName, lastName, email, password]);

  const getQuery = 'SELECT `id` FROM users_crud.users order by id desc limit 1;';
  const [[lastRow]] = await connection.query(getQuery);
  return { id: lastRow.id, firstName, lastName, email };
}

const get = async () => {
  const query = 'SELECT * FROM users_crud.users;';
  const [result] = await connection.query(query);
  return result;
};

const getById = async (id) => {
  const query = 'SELECT * FROM users_crud.users WHERE id = ?';
  const [[result]] = await connection.query(query, [id]);
  if (!result || result === []) return null;
  return result;
};

const edit = async (id, { firstName, lastName, email, password }) => {
  const queryUpdate = 'UPDATE users_crud.users SET `first_name` = ?,'
    + ' `last_name` = ?, `email` = ?, `password` = ? WHERE id = ?;';
  await connection.query(queryUpdate, [firstName, lastName, email, password, id]);
  return { id, firstName, lastName, email };
};

module.exports = {
  insert,
  get,
  getById,
  edit,
};
