const cepServices = require('../services/cepServices')

const getAll = (_req, res) => {
  // const ceps = await cepServices.getAll();
  try {
    res.status(200).json({ "message": "pong!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

};

const getCep = (req, res) => {
  try {
    const cep = req.body.params;
    result = cepServices.getCep(cep);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAll,
  getCep,
};
