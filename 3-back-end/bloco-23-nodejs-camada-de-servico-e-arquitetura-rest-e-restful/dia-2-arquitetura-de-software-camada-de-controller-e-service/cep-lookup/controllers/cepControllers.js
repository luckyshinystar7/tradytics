const cepServices = require('../services/cepServices')

const getAll = (_req, res) => {
  // const ceps = await cepServices.getAll();
  try {
    res.status(200).json({ "message": "pong!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

};

const getByCep = async (req, res) => {
  try {
    const { cep } = req.params;
    result = await cepServices.getByCep(cep);
    console.log(result.error.code);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAll,
  getByCep,
};
