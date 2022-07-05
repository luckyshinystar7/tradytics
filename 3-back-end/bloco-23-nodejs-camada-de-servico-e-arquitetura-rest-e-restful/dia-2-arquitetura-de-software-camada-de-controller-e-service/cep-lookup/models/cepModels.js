const db = require('./db');

// busca todos os dados do banco
const getAll = async () => {
  const [ceps] = await db.query(`
  SELECT * 
  FROM ceps;
  `);
  return ceps;
};

module.exports = {
  getAll,
};
