const cepModels = require('../models/cepModels');

const getAll = () => cepModels.getAll();

const getCep = (cep) => {
  return cepModels.getCep(cep)
};

module.exports = {
  getAll,
};
