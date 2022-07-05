const cepModels = require('../models/cepModels');

const getAll = () => cepModels.getAll();

module.exports = {
  getAll,
};
