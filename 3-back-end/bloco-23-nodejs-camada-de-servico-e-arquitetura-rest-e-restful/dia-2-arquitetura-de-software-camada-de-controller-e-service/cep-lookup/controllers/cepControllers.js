const cepServices = require('../services/cepServices')

const getAll = async (_req, res) => {
  const ceps = await cepServices.getAll();

  return res.status(200).json(ceps);
};

module.exports = {
  getAll,
};
