const db = require('./db');

// busca todos os dados do banco
const getAll = async () => {
  const [ceps] = await db.query(`
  SELECT * 
  FROM ceps;
  `);
  return ceps;
};

const getByCep = async (searchedCep) => {
  const query = 'SELECT * FROM ceps WHERE cep = ?'
  const [[result]] = await db.query(query, [searchedCep]);
  console.log(result);
  return result;
};

module.exports = {
  getAll,
  getByCep,
};
