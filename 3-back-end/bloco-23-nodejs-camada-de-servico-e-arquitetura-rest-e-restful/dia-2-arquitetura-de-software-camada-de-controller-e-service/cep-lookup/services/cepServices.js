const cepModels = require('../models/cepModels');

const getAll = () => cepModels.getAll();

validateCep = (cep) => {
  if (!/^\d{5}-\d{3}$/.test(cep)) {
    return { "error": { "code": "invalidData", "message": "CEP inválido" } }
  };
  return null;
};

const getByCep = async (searchedCep) => {
  const validate = validateCep(searchedCep);

  if(validate) return validate;

  const numberCep = searchedCep.replace('-', '');

  const result = await cepModels.getByCep(numberCep);

  if (!result || result === []) return { "error": { "code": "notFound", "message": "CEP não encontrado" } };

  // format CEP
  result.cep = result['cep'].slice(0, 5) + '-' + result['cep'].slice(5);
  return result;
};

module.exports = {
  getAll,
  getByCep,
};
