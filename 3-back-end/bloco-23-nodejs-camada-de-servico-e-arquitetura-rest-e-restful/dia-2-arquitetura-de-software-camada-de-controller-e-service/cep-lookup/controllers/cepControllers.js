// const cepServices = require('../services/cepServices')

const getAll = (_req, res) => {
  // const ceps = await cepServices.getAll();

  res.status(200).json({ "message": "pong!" });
};

module.exports = {
  getAll,
};
